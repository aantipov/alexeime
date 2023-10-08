import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg1 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16  font-bold">
            Get Help with your Web Projects
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline md:hidden">Web Dev Expertise</span>
            <span className="hidden md:inline">Web Dev Expertise</span>
          </div>
          <div className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-20 md:px-24 lg:px-24">
            for Businesses
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 mb-32">
            With 15 years in web development, I specialize in boosting startups.
            From tech stack to coding and team building—count on me for
            scalable, resilient web solutions.
          </div>
        </motion.div>
        {/* MESSAGE ME */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Let's discuss your project and needs
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline">Message me</span>
          </div>
          <div>
            <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
              Describe your project, needs and ideas you have in mind. I'll get
              back to you within a day. You can reach me:
            </div>
          </div>

          <div className="mt-10 px-12 sm:px-48 mb-28">
            <ul className="text-xl text-white">
              <li>
                <strong>On Twitter</strong>:{" "}
                <a
                  href="https://twitter.com/_aantipov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  sending a DM
                </a>
              </li>
              <li className="pt-3">
                <strong>Over LinkedIn</strong>:{" "}
                <a
                  href="https://www.linkedin.com/in/aantipov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  sending a message
                </a>
              </li>
              <li className="pt-3">
                <strong>Over email</strong>: at antipov (dot) alexei (at) gmail
                (dot) com
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Follow me */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Let's connect
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline">Follow me</span>
          </div>
          <div>
            {/* Add section with two columns for large screens and one column for smaller screens */}
            <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
              I share my thoughts on web development, tech, and startups on
            </div>
          </div>
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 mb-20">
            <ul className="text-xl text-white">
              <li>
                <a
                  href="https://twitter.com/_aantipov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  On Twitter
                </a>
                : @_aantipov
              </li>
              <li className="pt-3">
                <a
                  href="https://www.linkedin.com/in/aantipov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  On Linkedin
                </a>
                : Alexey Antipov
              </li>
              <li className="pt-3 pb-20 bold">
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  On my Blog
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
