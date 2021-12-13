import { ref, Ref } from "vue";
import { useData } from "vitepress";
import metadata from "../metadata.json";

export function useReadTime(): Ref<string> {
  const { page } = useData();
  const relativePath = page.value.relativePath;
  const path = relativePath
    .slice(0, relativePath.lastIndexOf("/"))
    .slice(relativePath.indexOf("/") + 1);
  const pageMetadata = metadata.find(({ href }) => href === `/${path}/`);
  // @ts-ignore
  return ref(pageMetadata.readTime);
}