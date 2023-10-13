// Hamburger menu for mobile devices
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Blog", href: "/blog/", ariaLabel: "Blog" },
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
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className={`navbar-link ${getActiveLinkClass(href)}`}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
