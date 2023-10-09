import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="hero-bg-gradient flex w-screen items-center justify-center bg-customDarkBg1"
      id="home"
    >
      <div className="flex w-full flex-col items-center justify-center pt-16 text-center md:w-[800px] md:pt-16 lg:pt-20 xl:w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 mt-16 text-sm font-bold text-customSecondary sm:mt-32  sm:text-base">
            Get Help with your Web Projects
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="px-8 text-5xl font-bold tracking-wide text-white sm:px-8  sm:text-6xl  md:px-20 lg:px-4 lg:text-7xl xl:text-7xl">
            <span className="inline md:hidden">Web Dev Expertise</span>
            <span className="hidden md:inline">Web Dev Expertise</span>
          </div>
          <div className="mt-2 px-8 text-4xl font-bold tracking-wide text-white sm:mt-2 sm:px-20  sm:text-6xl  md:px-24 lg:px-24 lg:text-7xl xl:text-7xl">
            for Businesses
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-24 mt-4 px-12 text-sm text-customGrayText sm:mb-32 sm:mt-10 sm:px-48 sm:text-base lg:text-base xl:text-lg">
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
          <div className="mb-6 mt-2 text-sm font-bold text-customSecondary sm:mt-32 sm:text-base">
            Let's discuss your project and needs
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="px-8 text-5xl font-bold tracking-wide text-white sm:px-8 sm:text-6xl md:px-20 lg:px-4 lg:text-7xl xl:text-7xl">
            <span className="inline">Message me</span>
          </div>
          <div>
            <div className="mt-4 px-12 text-sm text-customGrayText sm:mt-10 sm:px-48 sm:text-base lg:text-base xl:text-lg ">
              Describe your project, needs and ideas you have in mind. I'll get
              back to you within a day. You can reach me:
            </div>
          </div>

          <div className="mb-24 mt-10 px-8 sm:mb-32 sm:px-48">
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
                <strong>Over email</strong>: antipov.alexei@gmail.com
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
          <div className="mb-6 mt-2 text-sm font-bold text-customSecondary sm:mt-32 sm:text-base">
            Let's connect
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="px-8 text-5xl font-bold tracking-wide text-white sm:px-8  sm:text-6xl  md:px-20 lg:px-4 lg:text-7xl xl:text-7xl">
            <span className="inline">Follow me</span>
          </div>
          <div>
            {/* Add section with two columns for large screens and one column for smaller screens */}
            <div className="mt-4 px-12 text-sm text-customGrayText sm:mt-10 sm:px-48 sm:text-base lg:text-base xl:text-lg ">
              I share my thoughts on web development, tech, and startups on
            </div>
          </div>
          <div className="mb-24 mt-10 px-12 text-sm text-customGrayText sm:mb-32 sm:px-48 sm:text-base lg:text-base xl:text-lg">
            <ul className="text-xl text-white">
              <li>
                <span className="font-bold">On Twitter</span>:&nbsp;
                <a
                  href="https://twitter.com/_aantipov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  @_aantipov
                </a>
              </li>
              <li className="pt-3">
                <span className="font-bold">On Linkedin</span>:&nbsp;
                <a
                  href="https://www.linkedin.com/in/aantipov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Alexey Antipov
                </a>
              </li>
              <li className="bold pt-3">
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  On my Blog
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
