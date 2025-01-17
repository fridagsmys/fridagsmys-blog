import { Link } from "react-router-dom";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    summary: string;
    content: string;
    author: string;
    image: string;
    createdAt: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="flex flex-col gap-y-2 md:flex-row md:items-center md:h-48 md:w-11/12 md:gap-x-4 xl:justify-center"
    >
      <div className="md:w-fit md:h-full md:bg-accent">
        <img
          src={post.image}
          alt=""
          className="md:h-full md:object-cover object-left"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-2 md:w-3/5">
        <p className="text-secondary text-sm sm:text-xs md:text-sm">
          {post.createdAt.slice(0, 10)}
        </p>
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl text-accent sm:text-xl md:text-3xl">
            {post.title}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <p className="text-neutral mb-4 sm:text-sm md:text-base">
          {post.summary}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
