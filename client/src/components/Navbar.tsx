import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between items-center px-6">
      <Link to="/">
        <a className="text-2xl font-bold">FRIDAGSMYS</a>
      </Link>

      {/* Desktop */}
      <div className="hidden lg:flex lg:gap-x-16 lg:mx-auto">
        {/* <Link to="/blog" className="hover:text-accent">
          Blog
        </Link> */}
        <Link to="/" className="hover:text-accent">
          Home
        </Link>
        <Link to="/projects" className="hover:text-accent">
          Projects
        </Link>
        <Link to="/about" className="hover:text-accent">
          About
        </Link>
      </div>
      <Link to="/connect">
        <a className="hidden lg:ml-16 lg:bg-secondary lg:border-secondary lg:text-white lg:btn lg:btn-sm lg:hover:bg-accent lg:hover:border-accent">Connect</a>
      </Link>

      {/* Mobile */}
      <div className="lg:hidden dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box w-40 z-10 p-2 shadow"
        >
          <li>
            <Link to="/" className="hover:text-accent hover:bg-base-100 text-lg">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/blog" className="hover:text-accent hover:bg-base-100 text-lg">
              Blog
            </Link>
          </li> */}
          <li>
            <Link
              to="/projects"
              className="hover:text-accent hover:bg-base-100 text-lg"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-accent hover:bg-base-100 text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/connect" className="bg-secondary text-white text-lg hover:bg-accent">
              <a className="">Connect</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
