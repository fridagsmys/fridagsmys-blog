import React, { useState } from "react";
import avatar from "../assets/avatar.jpeg";
import picart from "../assets/picartGirl.png";
import "../styles/about.css";
import { motion } from "motion/react";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGradient, setShowGradient] = useState(true);
  const [toggeled, setToggeled] = useState(false);

  const toggleCollapse = () => {
    toggleGradient();
    setIsExpanded((prev) => !prev);
  };

  const toggleGradient = () => {
    if (!showGradient) {
      setTimeout(() => {
        setShowGradient(true);
      }, 50);
    } else {
      setShowGradient(false);
    }
  };

  const toggleOffline = () => {
    setToggeled(!toggeled);
  };

  return (
    <div className="flex flex-col w-screen items-start justify-center gap-y-16 mb-16">
      {/* Hero mobile */}
      <motion.div
        className="flex flex-col items-center justify-between px-4 h-[calc(100vh-64px)] gap-8 sm:hidden"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col gap-8 items-center mt-6">
          <h1 className="text-6xl font-bold text-accent w-full text-center">
            Hello again!
          </h1>
          <motion.img
            src={avatar}
            alt="Prortrait of creator"
            // bg-secondary border-4 border-accent
            className="rounded-full w-3/4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          />
          <p className="text-secondary font-bold text-3xl">I'm Frida</p>
          <p className="text-lg text-center mt-4">
            And I'm a passionate full-stack developer and designer who loves
            creating seamless digital experiences.
          </p>
        </div>
        <div className="mb-8">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#E43D12"
            className="size-8"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Hero desktop/tablet */}
      <motion.div
        className="hidden sm:flex sm:py-8 sm:justify-center sm:px-16 sm:gap-4 lg:px-32 lg:py-16 xl:justify-center xl:gap-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.img
          src={avatar}
          alt="Prortrait of creator"
          // bg-secondary border-4 border-accent
          className="sm:rounded-full sm:w-1/4"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <div className="sm:flex sm:flex-col sm:w-1/2 justify-center gap-2 xl:w-1/2">
          <h1 className="sm:text-4xl sm:font-bold sm:text-accent xl:text-5xl">
            Hello again!
          </h1>
          <p className="sm:text-secondary sm:font-bold sm:text-2xl xl:text-3xl">
            I'm Frida
          </p>
          <p className="sm:text-sm xl:text-lg">
            And I'm a passionate full-stack developer and designer who loves
            creating seamless digital experiences.
          </p>
        </div>
      </motion.div>

      {/* A little bit about me */}
      <div
        className="flex flex-col gap-4 bg-primary p-10 w-fit relative cursor-pointer sm:px-32 lg:px-64"
        onClick={toggleCollapse}
      >
        <h2 className="font-bold text-accent text-3xl text-center sm:text-2xl lg:text-3xl">
          A little bit about me
        </h2>
        <p className="text-center sm:text-sm lg:text-base">
          Recently graduated and ready to dive into the tech industry, I've
          fallen head over heels for coding. Motivated and always up for a
          challenge, I can't wait to grow and refine my skills.
        </p>
        <div
          className={`relative overflow-hidden transition-all duration-100 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-12"
          }`}
        >
          {showGradient ? (
            <div className="absolute inset-x-0 h-12 bg-gradient-to-t from-primary opacity-100 duration-500 ease-in-out"></div>
          ) : (
            <div className="absolute inset-x-0 h-12 bg-gradient-to-t from-primary opacity-0 duration-100 ease-in-out"></div>
          )}

          <p className="text-center transition-opacity duration-500 ease-in-out sm:text-sm lg:text-base">
            While I enjoy working across the entire stack, my heart leans toward
            front-end development. I'm proficient in tools like React, HTML,
            CSS, and Typescript, and I have hands-on experience styling with
            modern libraries like Tailwind, daisyUI, and Bootstrap. But let's
            face it—front-end wouldn't be as exciting without the back-end to
            bring it to life. That's why I've also built a strong foundation in
            back-end technologies like Node.js, Java, and database management
            with PostgreSQL and NoSQL systems.
          </p>
        </div>
      </div>

      {/* What drives me */}
      <div className="flex justify-center py-4 px-2 sm:px-12 lg:mx-auto lg:px-24 xl:px-48 2xl:px-80">
        <motion.div
          className="w-fit"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <h2 className="text-center text-secondary text-6xl font-bold vertical tracking-wide sm:text-5xl">
            What Drives Me
          </h2>
        </motion.div>
        <motion.div className="flex flex-col items-center gap-10 px-4 md:w-3/4">
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent">
              Design & User Experience
            </h3>
            <p className="text-lg sm:text-base">
              I love design and I want to in create intuitive and visually
              appealing user interfaces.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent">
              Problem-Solving
            </h3>
            <p className="text-lg sm:text-base">
              I enjoy diving head-first into challenges, finding solutions, and
              optimizing performance to make things work beautifully together.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent">Adaptability</h3>
            <p className="text-lg sm:text-base">
              With how fast technology is evolving today I think it's important
              to embrace continuous learning to stay ahead of the curve and grow
              as a developer.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent">
              Collaboration
            </h3>
            <p className="text-lg sm:text-base">
              I believe the best ideas are born from teamwork, where diverse
              perspectives come together to build something great.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* What I Bring To The Table */}
      <div className="flex justify-start items-start py-4 px-2 sm:px-12 md:justify-center lg:mx-auto lg:px-24 xl:px-48 2xl:px-80">
        <div className="flex flex-col items-center gap-10 px-4 md:w-3/4">
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent text-end">
              Technical Proficiency
            </h3>
            <p className="text-lg text-end sm:text-base">
              From modern front-end frameworks like React and React Native to
              back-end technologies, I create reliable, scalable, and
              user-focused applications.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent text-end">
              Attention to Detail
            </h3>
            <p className="text-lg text-end sm:text-base">
              As a perfectionist at heart, I want every line of code and design
              element to meet the highest standards.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent text-end">
              Creative Vision
            </h3>
            <p className="text-lg text-end sm:text-base">
              My love for design means creativity is always at the forefront of
              all aspects my work.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-semibold text-2xl text-accent text-end">
              Adaptability and Growth
            </h3>
            <p className="text-lg text-end sm:text-base">
              I always want to learn new things when it comes to programming,
              and adapting to new knowledge and practices is no problem at all.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="w-fit"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <h2 className="text-center text-secondary text-6xl font-bold vertical2 tracking-wide sm:text-5xl">
            What I Bring To The Table
          </h2>
        </motion.div>
      </div>

      {/* Offline (What I do in spare time) */}
      <div className="w-full px-4 sm:px-24 lg:px-48 xl:px-72">
        <div
          className={`h-56 w-full card-body gap-4 transition-all duration-500 ${
            toggeled ? "bg-primary text-black" : "bg-neutral-800 text-base-100"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-centers gap-2">
              <h2 className="card-title font-bold text-accent text-3xl text-center">
                {toggeled ? "Online" : "Offline"}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={toggeled ? "#E43D12" : "#EBE9E1"}
                className="size-8 h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    toggeled
                      ? "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      : "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  }
                />
              </svg>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-lg toggle-accent"
              onClick={toggleOffline}
            />
          </div>
          {toggeled ? (
            <div className="h-full flex justify-center items-center gap-8 opacity-100 transition-opacity duration-500">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <i className="fa-brands fa-linkedin text-accent fa-2xl"></i>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <i className="fa-brands fa-github text-accent fa-2xl"></i>
              </motion.div>
            </div>
          ) : (
            <p className="opacity-100 transition-opacity duration-500">
              When I'm not writing code, you'll most likely find me playing or
              listening to music, or maybe outdoors, soaking up nature, or in a
              newly opened restuarant in the city.
            </p>
          )}
        </div>
      </div>

      {/* lil picture */}
      <div className="flex w-full lg:justify-end">
        <motion.img
          src={picart}
          alt="A drawing of a woman eith brown hair"
          className="w-1/3 m-auto sm:w-1/4 md:w-1/5 lg:w-32 lg:mr-12"
        />
      </div>
    </div>
  );
};

export default About;
