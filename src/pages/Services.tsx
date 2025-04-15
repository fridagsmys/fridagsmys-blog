import React from "react";
import avatar from "../assets/avatar.jpeg";
import Skills from "../components/Skills";

const Services: React.FC = () => {
  return (
    <div className="container flex flex-col px-4 items-start justify-center gap-y-12">
      <div className="flex flex-col gap-4 items-center px-2">
        <h1 className="text-6xl font-bold text-accent w-full text-center">
          Who am I?
        </h1>
        <img
          src={avatar}
          alt="Prortrait of creator"
          // bg-secondary border-4 border-accent
          className="rounded-full w-3/4"
        />
        <p className="text-lg text-center">
          Hi, I'm Frida, a passionate and highly motivated full-stack developer
          with a passion for creating seamless digital experiences.
        </p>
      </div>

      {/* Skills */}
      <div className="w-full">
        <h2 className="text-4xl font-bold text-accent w-full text-center">
          My Toolbox
        </h2>
        <div>
          <h3>Frontend</h3>
        </div>
      </div>
      {/* <Skills /> */}
    </div>
  );
};

export default Services;
