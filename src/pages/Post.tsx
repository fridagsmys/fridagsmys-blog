import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummyBlogData from "../dummyData";
import Marquee from "react-fast-marquee";

interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  image: string;
  createdAt: string;
}

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Blog>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = () => {
      try {
        const foundPost = dummyBlogData.find((blog) => blog.id === Number(id));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Post not found.");
        }
        setLoading(false);
      } catch (err: any) {
        setError("An error occured.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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

  if (!post) {
    return <div className="text-center text-xl mt-10">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 flex flex-col gap-y-4 pb-24">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a className="text-neutral">Blog</a>
          </li>
          <li className="text-neutral">{post.title}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 mb-16">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-neutral">
          <p>By {post.author}</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{Math.ceil(post.content.split(" ").length / 200)} min read</p>
        </div>
        <img src={post.image} alt="" />
        <p>{post.content}</p>
      </div>
      <div>
        <div className="border-y-4 border-black mx-auto w-full">
          <Marquee autoFill={true}>
            <span className="px-4 sm:text-sm">RELATED POSTS</span>
          </Marquee>
        </div>
        <div className="bg-accent ">POSTS</div>
      </div>
    </div>
  );
};

export default Post;
