import React from "react";

function Projects() {
  return (
    <div className="p-4 z-50">
      <hr className="border-1 border-black" />
      <h1 className="font-bold text-[1.6rem] p-5 text-center font-Inter">Projects</h1>
      <div className="grid grid-flow-row md:grid-flow-col m-auto gap-4 md:my-3 ">
        <div className="card w-60 bg-base-100 shadow-xl m-auto hover:scale-105 hover:-translate-x-1 transition ease-in-out delay-100 duration-300 ">
          <div className="card-body text-white">
            <h2 className="card-title font-Inter">mystry messages</h2>
            <p className="font-Lora">send anonymous messages</p>
          </div>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card w-60 bg-base-100 shadow-xl m-auto hover:scale-105 hover:-translate-x-1 transition ease-in-out delay-100 duration-300 ">
          <div className="card-body text-white">
            <h2 className="card-title font-Inter">obs clone </h2>
            <p className=" font-Lora">stream effortlessly to any platform </p>
          </div>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card w-60 bg-base-100 shadow-xl m-auto hover:scale-105 hover:-translate-x-1 transition ease-in-out delay-100 duration-300 ">
          <div className="card-body text-white">
            <h2 className="card-title font-Inter">portfolio</h2>
            <p className=" font-Lora">portfolio to showcase my talent </p>
          </div>
          <figure>
            <img
              src="./img/portfolio.png"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card w-60 bg-base-100 shadow-xl m-auto hover:scale-105 hover:-translate-x-1 transition ease-in-out delay-100 duration-300 ">
          <div className="card-body text-white">
            <h2 className="card-title font-Inter">coming soon!!</h2>
            <p className=" font-Lora">never know what surprise there is.</p>
          </div>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className=" blur-sm"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Projects;
