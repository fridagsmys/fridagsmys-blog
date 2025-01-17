import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import "../styles/home.css";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import ConnectCto from "../components/ConnectCto";
import dummyBlogData from "../dummyData";
import Blog from "./Blog";

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
      <div className="h-[calc(100vh-8rem)] flex flex-col p-4 items-start justify-center mx-6 h-4/5 sm:w-4/5 sm:mx-auto">
        <p className="font-semibold sm:text-sm">Hi, I'm</p>
        <h2 className="font-semibold text-xl text-secondary">
          Frida Alstergren
        </h2>
        <h1 className="font-bold text-6xl text-accent sm:text-5xl">
          Fullstack Developer
        </h1>
        <p className="mt-4 sm:text-sm lg:w-2/3 2xl:w-7/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          maximus condimentum tellus in dictum. Sed molestie arcu aliquam
          pharetra sollicitudin. Sed vestibulum egestas purus in fermentum.
        </p>
        <button className="btn btn-secondary mt-4 text-base-100 hover:bg-accent hover:border-accent sm:btn-sm sm:text-xs">
          Let's connect
        </button>
      </div>
      <div className="absolute bottom-10 right-0">
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
      </div>

      {/* Blog section */}
      <div className="px-4 py-12 flex flex-col gap-y-4 sm:items-center sm:w-full sm:mx-auto lg:mx-0 lg:w-full">
        <div className="border-y-4 border-black mx-auto w-full">
          <Marquee autoFill={true}>
            <span className="px-4 sm:text-sm">LATEST POST</span>
          </Marquee>
        </div>
        {mostRecentPost && (
          <BlogCard key={mostRecentPost.id} post={mostRecentPost} />
        )}
        <div className="border-y-4 border-black mx-auto w-full">
          <Marquee autoFill={true}>
            <span className="px-4 sm:text-sm">LATEST POST</span>
          </Marquee>
        </div>
      </div>

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Connect cto */}
      <ConnectCto />
    </div>
  );
};

export default Home;
