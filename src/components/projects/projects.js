import React from "react";

const projects = [{ name: "portfolio", desc:"portfolio to showcase my talent", img:"./img/portfolio.png" }];
function Projects() {
  return (
    <div className="p-4 z-50">
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
            <div className="card-body text-white">
              <h2 className="card-title font-Inter">{project.name}</h2>
              <p className=" font-Lora">{project.desc} </p>
            </div>
            <figure>
              <img src={`${project.img}`} alt={`${project.name}`} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
