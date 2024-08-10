import React from "react";
import "./Skills.css";

const technologies = [
  { name: 'HTML', icon: "https://www.svgrepo.com/show/521280/html-16.svg"},
  { name: 'CSS', icon: 'https://www.svgrepo.com/show/521275/css-16.svg' },
  { name: 'JavaScript', icon: 'https://www.svgrepo.com/show/473670/javascript.svg' },
  { name: 'TypeScript', icon: 'https://www.svgrepo.com/show/521320/typescript-16.svg' },
  { name: 'React', icon: 'https://www.svgrepo.com/show/521303/react-16.svg' },
  { name: 'Next.js', icon: 'https://www.svgrepo.com/show/368858/nextjs.svg' },
  { name: 'Node.js', icon: 'https://www.svgrepo.com/show/521297/node-16.svg' },
  { name: 'Express', icon: 'https://www.svgrepo.com/show/330398/express.svg' },
  { name: 'MongoDB', icon: 'https://www.svgrepo.com/show/372906/mongodb.svg' },
  { name: 'MySQL', icon: 'https://www.svgrepo.com/show/394296/mysql.svg' },
  { name: 'PostgreSQL', icon: 'https://www.svgrepo.com/show/342129/postgresql.svg' },
  { name: 'Docker', icon: 'https://www.svgrepo.com/show/473589/docker.svg' },
  { name: 'Tailwind', icon: 'https://www.svgrepo.com/show/368997/tailwind.svg' },
  { name: 'Bootstrap', icon: 'https://www.svgrepo.com/show/344496/bootstrap.svg' },
  { name: 'Git', icon: 'https://www.svgrepo.com/show/509966/git.svg' },
  { name: 'GitHub', icon: 'https://www.svgrepo.com/show/512317/github-142.svg' },
  { name: 'Postman', icon: 'https://www.svgrepo.com/show/306590/postman.svg' },
  { name: 'Linux', icon: 'https://www.svgrepo.com/show/473700/linux.svg' },
];

function Skills() {
  return (
    <div className="p-4 font-Lora">
      <hr  />
      <h1 className="font-bold text-[1.4rem] p-5 text-center font-Inter">Things i play with </h1>
      <div className="md:flex md:flex-wrap grid grid-cols-3 gap-3 gap-x-10  md:gap-10 m-4">
        
      </div>
      <section id="skills" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Things I play with</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-300 transition-colors">
                <img className="text-2xl my-2 w-10 "src={`${tech.icon}`} alt={`${tech.name}`}></img>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}

export default Skills;
