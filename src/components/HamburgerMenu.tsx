// Hamburger menu for mobile devices
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Blog", href: "/blog/", ariaLabel: "Blog" },
  { label: "RSS", href: "/rss.xml", ariaLabel: "RSS", rss: true },
];

type Props = {
  currentPath: string;
};

export const HamburgerMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPath } = props;
  function getActiveLinkClass(path: string) {
    return path === currentPath ? "underline font-extrabold" : "";
  }

  return (
    <div
      className="flex cursor-pointer flex-col rounded-md border border-solid border-gray-600 px-2 py-3 hover:bg-customDarkBg2 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
      <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
      <div className="h-0.5 w-5 bg-gray-500 "></div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute left-0 top-4 z-50 mt-16 flex w-full  flex-col items-center gap-10 
        border-y border-solid border-customDarkBg3 bg-customDarkBg1 pb-10 pt-10 lg:hidden
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel, rss }) =>
                rss ? (
                  <a
                    href="/rss.xml"
                    aria-label={ariaLabel}
                    className="navbar-link flex items-end text-white"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 21q-.825 0-1.412-.587T3 19q0-.825.588-1.412T5 17q.825 0 1.413.588T7 19q0 .825-.587 1.413T5 21m13.5 0q-.65 0-1.088-.475T16.9 19.4q-.275-2.425-1.312-4.537T12.9 11.1q-1.65-1.65-3.762-2.687T4.6 7.1q-.65-.075-1.125-.512T3 5.5q0-.65.45-1.062t1.075-.363q3.075.275 5.763 1.563t4.737 3.337q2.05 2.05 3.338 4.738t1.562 5.762q.05.625-.363 1.075T18.5 21m-6 0q-.625 0-1.075-.437T10.85 19.5q-.225-1.225-.787-2.262T8.65 15.35q-.85-.85-1.888-1.412T4.5 13.15q-.625-.125-1.062-.575T3 11.5q0-.65.45-1.075t1.075-.325q1.825.25 3.413 1.063t2.837 2.062q1.25 1.25 2.063 2.838t1.062 3.412q.1.625-.325 1.075T12.5 21"
                        />
                      </svg>
                    </span>
                    <span>RSS</span>
                  </a>
                ) : (
                  <a
                    key={href}
                    className={`navbar-link ${getActiveLinkClass(href)}`}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
