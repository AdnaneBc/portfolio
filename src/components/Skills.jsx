import React from "react";
const skills = [
  {
    name: "Vite.js",
    image: "/assets/skills/Vite.js.png",
    link: "https://vitejs.dev/",
  },
  {
    name: "Tailwind CSS",
    image: "/assets/skills/Tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "React",
    image: "/assets/skills/React.png",
    link: "https://reactjs.org/",
  },
  {
    name: "JavaScript",
    image: "/assets/skills/JavaScript.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: "/assets/skills/TypeScript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    image: "/assets/skills/Python.png",
    link: "https://www.python.org/",
  },
  {
    name: "MySQL",
    image: "/assets/skills/MySQL.png",
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    image: "/assets/skills/PostgresSQL.png",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    image: "/assets/skills/MongoDB.png",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Node.js",
    image: "/assets/skills/Node.js.png",
    link: "https://nodejs.org/",
  },
  {
    name: "Docker",
    image: "/assets/skills/Docker.png",
    link: "https://www.docker.com/",
  },

  {
    name: "GitHub",
    image: "/assets/skills/GitHub.png",
    link: "https://github.com/",
  },
];
const Skills = () => {
  return (
    <section className=" py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 tracking-widest ">
          SKILLS
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 hover:scale-110 transition-transform"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
