import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import "../styles/home.css";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import ConnectCto from "../components/ConnectCto";
import dummyBlogData from "../dummyData";
import Blog from "./Blog";
import { motion } from "motion/react";
import ProjectsShowcase from "../components/ProjectsShowcase";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [mostRecentPost, setMostRecentPost] = useState<Blog | null>(null);

  useEffect(() => {
    const sortedPosts = [...dummyBlogData].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setMostRecentPost(sortedPosts[0]);
  }, []);

  return (
    <div className="mb-12">
      {/* Hero */}
      <motion.div
        className="h-[calc(100vh-8rem)] flex flex-col p-4 items-start justify-center mx-6 h-4/5 sm:w-4/5 sm:mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="font-semibold sm:text-sm">Hi, I'm</p>
        <motion.h2
          className="font-semibold text-xl text-secondary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          Frida Alstergren
        </motion.h2>
        <motion.h1
          className="font-bold text-6xl text-accent sm:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Fullstack Developer
        </motion.h1>
        <motion.p
          className="mt-4 sm:text-sm lg:w-2/3 2xl:w-7/12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I'm a curious and creative fullstack developer who enjoys solving
          problems and learning new things. I love working on projects that
          combine design, functionality, and user experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.button
            className="btn btn-secondary mt-4 text-white hover:bg-accent hover:border-accent sm:btn-sm sm:text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/connect" className="flex items-center h-full">Let's connect</Link>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-0"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="#E43D12"
          className="size-64"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
          />
        </svg>
      </motion.div>

      {/* Blog section */}
      {/* <div className="px-4 py-12 flex flex-col gap-y-4 sm:items-center sm:w-full sm:mx-auto lg:mx-0 lg:w-full">
        <div className="border-y-4 border-black mx-auto w-full">
          <Marquee autoFill={true}>
            <span className="px-4 sm:text-sm">LATEST POST</span>
          </Marquee>
        </div>
        {mostRecentPost && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard key={mostRecentPost.id} post={mostRecentPost} />
          </motion.div>
        )}
        <div className="border-y-4 border-black mx-auto w-full">
          <Marquee autoFill={true}>
            <span className="px-4 sm:text-sm">LATEST POST</span>
          </Marquee>
        </div>
      </div> */}

      {/* Services */}
      <Services />

      {/* Projects */}
      <ProjectsShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Connect cto */}
      <ConnectCto />
    </div>
  );
};

export default Home;
