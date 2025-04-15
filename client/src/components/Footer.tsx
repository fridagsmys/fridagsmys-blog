import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t-2 border-black">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Logo and tagline */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold text-accent">FRIDAGSMYS</h2>
          <p className="text-sm mt-2">
            I just really like programming, design, and problem-solving.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-x-16">
          {/* <Link to="/blog" className="hover:text-accent">
            Blog
          </Link> */}
          <Link to="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/connect" className="hover:text-accent">
            Connect
          </Link>
        </div>

        {/* Social media icons */}
        <div className="flex gap-4 mt-6 lg:mt-0">
          <a
            href="https://github.com/fridagsmys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.01c-3.338.725-4.042-1.613-4.042-1.613-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.805 1.304 3.49.997.107-.775.418-1.305.76-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.467-2.383 1.235-3.223-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.525 11.525 0 013.003-.403c1.018.004 2.04.137 3.003.403 2.292-1.552 3.3-1.23 3.3-1.23.652 1.653.241 2.873.118 3.176.77.84 1.234 1.913 1.234 3.223 0 4.608-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.192.693.801.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/frida-alstergren-6b6102227/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5c0 1.4-1.1 2.5-2.5 2.5S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 24h5V7H0v17zm7.5 0h4.991v-9.42c0-2.518.479-4.41 3.292-4.41 2.79 0 2.787 2.857 2.787 4.57V24h5V13.182c0-5.08-1.128-8.731-7.453-8.731-3.04 0-4.863 1.663-5.678 3.23h-.074V7H7.5c.074 1.145 0 17 0 17z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t-2 border-black">
        <p className="text-sm">
          © {new Date().getFullYear()} Frida Alstergren. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
