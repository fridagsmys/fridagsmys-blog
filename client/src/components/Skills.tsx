import { useState } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      id: 1,
      icon: "https://img.icons8.com/?size=75&id=047WZAFDnkVp&format=png&color=e43d12",
      alt: "React logo",
      description: "React",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/?size=75&id=vMqgHSToxrJR&format=png&color=e43d12",
      alt: "Typescript icon",
      description: "Typescript",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/?size=75&id=39853&format=png&color=e43d12",
      alt: "Javascript icon",
      description: "Javascript",
    },
    {
      id: 4,
      icon: "https://img.icons8.com/?size=75&id=FQlr_bFSqEdG&format=png&color=e43d12",
      alt: "Node.js icon",
      description: "Node.js",
    },
    {
      id: 5,
      icon: "https://img.icons8.com/?size=75&id=3753&format=png&color=e43d12",
      alt: "PHP icon",
      description: "PHP",
    },
    {
      id: 6,
      icon: "https://img.icons8.com/?size=75&id=2572&format=png&color=e43d12",
      alt: "Java icon",
      description: "Java",
    },
    {
      id: 7,
      icon: "https://img.icons8.com/?size=75&id=38273&format=png&color=e43d12",
      alt: "CSS3 icon",
      description: "CSS3",
    },
    {
      id: 8,
      icon: "https://img.icons8.com/?size=75&id=25010&format=png&color=e43d12",
      alt: "PostgreSQL icon",
      description: "PostgreSQL",
    },
    {
      id: 9,
      icon: "https://img.icons8.com/?size=75&id=39858&format=png&color=e43d12",
      alt: "MySQL icon",
      description: "MySQL",
    },
  ];

  return (
    // bg-gradient-to-r from-base-100 via-primary to-base-100
    <div className="w-full bg-gradient-to-r from-base-100 via-primary to-base-100">
      <Marquee pauseOnHover className="overflow-y-hidden">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="card w-fit px-8 py-4"
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Hover content */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                hoveredSkill === skill.id
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <p className="text-center font-semibold text-lg text-accent">
                {skill.description}
              </p>
            </div>

            {/* Default content */}
            <div
              className={`flex flex-col items-center justify-center transition-opacity duration-300 ${
                hoveredSkill === skill.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={skill.icon}
                alt={skill.alt}
                className="w-16 h-16 mb-2"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
