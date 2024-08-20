import React from "react";

const projects = [
  {
    name: "nxs-esports",
    desc: "A e-sports tournament management site",
    img: "./img/nxs.png",
    link:"https://nxs-esports.vercel.app/"
  },
  {
    name: "Dex wizard",
    desc: "Crypto watching platform",
    img: "./img/dex.png",
    link:"https://dex-wizard-lakshya.vercel.app/"
  },
  {
    name: "portfolio",
    desc: "portfolio to showcase my talent",
    img: "./img/portfolio.png",
    link: "/"
  },
  
];
function Projects() {
  return (
    <div className="p-4 z-50" id="projects">
      <hr className="border-1 border-black" />
      <h1 className="font-bold text-[1.6rem] p-5 text-center font-Inter">
        Projects
      </h1>
      <div className="grid grid-flow-row md:grid-flow-col m-auto gap-4 md:my-3 ">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card w-60 bg-base-100 shadow-xl m-auto hover:scale-105 hover:-translate-x-1 transition ease-in-out delay-100 duration-300 "
          >
            <a href={`${project.link}`} target="_blank">
              <div className="card-body text-white">
                <h2 className="card-title font-Inter">{project.name}</h2>
                <p className=" font-Lora">{project.desc} </p>
              </div>
              <figure>
                <img src={`${project.img}`} alt={`${project.name}`} />
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
