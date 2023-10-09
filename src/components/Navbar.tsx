import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myImage from "@assets/images/me.jpg";

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
];

type Props = {
  currentPath: string;
};

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPath } = props;
  function getActiveLinkClass(path) {
    return path === currentPath ? "underline font-extrabold" : "";
  }

  return (
    <nav className="fixed z-40 flex h-20 w-full flex-col items-center justify-center bg-customDarkBg1 lg:bg-customDarkBgTransparent lg:backdrop-blur-xl">
      <div className="relative flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[1280px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="/" aria-label="Home">
            <div className="flex grow basis-0 items-center justify-start">
              <div className="mr-2 text-6xl text-white">
                <img
                  src={myImage.src}
                  width={50}
                  alt="f4"
                  className="custom-border-gray  rounded-xl"
                />
              </div>
              <div className="font-['Inter'] text-xl font-bold text-white">
                Alexey Antipov
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden h-full pb-2 pl-12 lg:flex">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className={`navbar-link ${getActiveLinkClass(href)}`}
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <div
          className="flex cursor-pointer flex-col  rounded-md border border-solid border-gray-600 px-2 py-3 hover:bg-customDarkBg2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="h-0.5 w-5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
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
                  className="navbar-link"
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
    </nav>
  );
};