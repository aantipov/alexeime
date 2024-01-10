---
title: "Handling JSON data in SQL Databases"
date: 2024-01-10
summary: Unlock the potential of storing JSON data in SQL databases. Learn from a real-world implementation in the Notion-Gtasks Sync app.
desc: Unlock the potential of storing JSON data in SQL databases. Learn from a real-world implementation in the Notion-Gtasks Sync app.
image: ./og.png
heroImage: ./og.png
heroAlt: "SQL database plus JSON document equals enhanced data processing capability"
---

I was implementing error handling in my [Notion-Gtasks Sync](https://notion-google-tasks-sync.com/) app and I needed to store 3 additional data items in the database:

- last error message
- number of consecutive errors
- next retry time

The idea was to implement exponential backoff for synchronisation attempts, limit the total number of attempts to 10 and decrease the number of duplicate errors reported to Sentry (I’m using a free plan). Therefore I had the following requirements for my error data handling:

- be able to filter out rows with more than 10 errors
- be able to reset all the error related data on successful sync
- increment the error count upon encountering a new error

I’m an amateur SQL engineer and I implemented first the obvious solution - I created 3 additional columns in the `users` table:

- `sync_error_msg`
- `sync_error_num`
- `sync_error_next_retry_time`

It seemed straightforward, but something didn’t feel right. The thing is that all three fields are, by nature, tightly coupled - when setting, resetting or updating one of them, the others should follow suit. Placing the fields in separate columns breaks their ties at storage level, and we must rely on the code logic exclusively to maintain their relationships. It didn’t seem like a reliable solution; instead, it seemed error-prone. As the code and database schema evolve over time, it can be challenging to maintain those ties. Something more reliable and less error-prone was needed. Something like encapsulation, maybe?

Reading through my database provider’s docs (Cloudflare D1) I found a [page](https://developers.cloudflare.com/d1/learning/querying-json/) describing sql functions to handle JSON data (based on [SQLite JSON extension](https://www.sqlite.org/json1.html)). It seemed perfect for my data handling requirements, allowing me to maintain relationships between the fields. I could store all my sync error-related data in a single column as a JSON object, as a single chunk of data.

I validated the idea and it yielded positive results!

Here are some of the implementation details.

I created a single column `sync_error` to store a json object with the error-related data.

```js
// my sql table schema definition using drizzle-orm
export const users = sqliteTable('users', {
  ...
 syncError: text('sync_error', { mode: 'json' }).$type<{
  msg: string;
  num: number; // Number of consecutive sync errors
  nextRetry: number | null; // Timestamp in ms. Exponential backoff. Null if no retries left. Max 10 retries within 5 days
 }>(), // Last sync error data. Reset to null on successful sync
  ...
});
```

I defined code logic to set `nextRetry` prop to `null` when the prop value reaches `10` - such data should not be included in the sync dataset. The query for selecting users for next sync (a simplified version of it):

```sql
SELECT *
FROM users
WHERE
    sync_error IS NULL
    OR json_extract(sync_error, '$.nextRetry') < strftime('%s', 'now') * 1000
```

Explanation: If `nextRetry` is `null`, the `json_extract` function returns `NULL`. In SQL, any comparison involving `NULL` (like < or >) results in `NULL` and the row is not included in the dataset for the next sync. Otherwise, if the current time is past the time of the next retry, the row is included in the result dataset and another sync attempt will be made. Pretty neat, isn’t it?

SQL JSON Extension is very powerful and provides many tools not just for filtering, but also for querying and setting data.

In my case, to update the JSON data I first query the data, then form a new json object in my code and then set it in my table:

```sql
UPDATE users
SET sync_error = '{"msg": "...", ...}'
WHERE ...
```

If I would need to update just one property inside that json object, I could do it directly using `json_insert` function:

```sql
UPDATE users
SET sync_error = json_insert(sync_error, '$.msg', 'error msg')
WHERE ...
```

In certain situations it might not be performant to use json functions in WHERE or SELECT clauses. To mitigate that performance issue one might create a computed (generated) column to store the extracted value. Computed columns can also be indexed to further improve query performance. It is not needed in my case, so I keep it simple.

Hope my findings can be useful to some.

<!-- If there are SQL veterans out there who notice issues with my approach and/or have suggestions, I’m keen to know and learn from you - please provide your opinion and share your experience working with JSON functions. -->
