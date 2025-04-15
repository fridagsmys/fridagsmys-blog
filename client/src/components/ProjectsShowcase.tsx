import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import AllemansappenIcon from "../assets/APPICON.png";

const marqueeText = <span className="px-4 sm:text-sm">MY PROJECTS</span>;

const ProjectsShowcase = () => {
  return (
    <motion.div
      className="px-4 py-12 flex flex-col gap-y-4 sm:items-center sm:w-full sm:mx-auto lg:mx-0 lg:w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Marquee */}
      <div className="border-y-4 border-black mx-auto w-full">
        <Marquee autoFill>{marqueeText}</Marquee>
      </div>

      {/* Project Card */}
      <div className="w-full flex justify-center py-4">
      <motion.div
        className="cursor-pointer flex flex-col items-center gap-4 md:flex-row md:py-2 md:justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 300,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
      >
        <motion.div
          className="w-40"
        >
          <img
            src={AllemansappenIcon}
            alt="Allemansappen Icon"
            className="rounded-3xl"
          />
        </motion.div>
        <p className="text-3xl text-accent font-bold">Allemansappen</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 absolute right-4 md:static"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
      </motion.div>
      </div>

      {/* Bottom Marquee */}
      <div className="border-y-4 border-black mx-auto w-full">
        <Marquee autoFill>{marqueeText}</Marquee>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;
