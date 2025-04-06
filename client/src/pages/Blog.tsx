import React, { useEffect, useState } from "react";
import dummyBlogData from "../dummyData";
import BlogCard from "../components/BlogCard";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  image: string;
  createdAt: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const sortedPosts = [...dummyBlogData].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA; // Descending order
      });

      setPosts(sortedPosts);
    } catch (err) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center w-full h-screen">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 flex flex-col gap-y-8 mb-16">
      <h1 className="text-7xl font-bold text-center mb-8 mt-4 sm:text-8xl md:text-9xl">
        THE BLOG.
      </h1>
      <div className="flex flex-col gap-y-8">
        <Marquee autoFill={true}>
          <h2 className="text-3xl font-semibold text-secondary px-4 md:px-6">
            Recent Posts
          </h2>
        </Marquee>
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:px-4 md:flex-col md:flex-nowrap md:px-0 md:w-full">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="sm:w-[calc(50%-16px)] md:w-full md:flex md:justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <BlogCard key={post.id} post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
