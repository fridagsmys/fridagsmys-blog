import { motion } from "framer-motion";
import AllemansappenIcon from "../assets/APPICON.png";

const Projects = () => {
  const title = "PROJECTS";

  return (
    <div className="h-screen px-4 text-center flex flex-col gap-8">
      <div className="flex justify-center">
        {title.split("").map((letter, index) => (
          <motion.h1
            key={index}
            className="text-7xl font-bold sm:text-8xl md:text-9xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.05,
            }}
          >
            {letter}
          </motion.h1>
        ))}
      </div>

      {/* Project Card */}
      <div className="w-full flex justify-center py-4">
        <motion.a
          href="https://apps.apple.com/se/app/allemansappen/id1610743282"
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
          <motion.div className="w-40">
            <img
              src={AllemansappenIcon}
              alt="Allemansappen Icon"
              className="rounded-3xl"
            />
          </motion.div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-3xl text-accent font-bold">Allemansappen</p>
            <p className="text-neutral">
              An app that let's you see the nature and life around you.
            </p>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
