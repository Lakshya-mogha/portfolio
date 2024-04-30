import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="p-4 font-Lora">
      <hr  />
      <h1 className="font-bold text-[1.4rem] p-5 text-center font-Inter">Things i play with </h1>
      <div className="md:flex md:flex-wrap grid grid-cols-3 gap-3 gap-x-10  md:gap-10 m-4">
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/521280/html-16.svg"
            alt="HTML"
          />
          <p>HTML</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/521275/css-16.svg"
            alt="css"
          />
          <p>css</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/473670/javascript.svg"
            alt="JS"
          />
          <p>JS</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/521320/typescript-16.svg"
            alt="TS"
          />
          <p>TS</p>
        </div>
        <div className="mx-2">
          <img className="img"
            src="https://www.svgrepo.com/show/521303/react-16.svg"
            alt="react"
          />
          <p>REACT</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/368858/nextjs.svg"
            alt="NEXT"
          />
          <p>NEXT</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/521297/node-16.svg"
            alt="NODE"
          />
          <p>NODE</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/330398/express.svg"
            alt="EXPRESS"
          />
          <p>EXPRESS</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/372906/mongodb.svg"
            alt="MONGODB"
          />
          <p>MONGODB</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/394296/mysql.svg"
            alt="MYSQL"
          />
          <p>MYSQL</p>
        </div>
        <div className="mx-2">
          <img className="img"
            src="https://www.svgrepo.com/show/342129/postgresql.svg"
            alt="POSTGRESQL"
          />
          <p>POSTGRES</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/473589/docker.svg"
            alt="DOCKER"
          />
          <p>DOCKER</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/368997/tailwind.svg"
            alt="TAILWIND"
          />
          <p>TAILWIND</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/344496/bootstrap.svg"
            alt="BOOTSTRAP"
          />
          <p>BOOTSTRAP</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/509966/git.svg"
            alt="GIT"
          />
          <p>GIT</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="GITHUB"
          />
          <p>GITHUB</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/306590/postman.svg"
            alt="POSTMAN"
          />
          <p>POSTMAN</p>
        </div>
        <div className="mx-2">
          <img
            className="img"
            src="https://www.svgrepo.com/show/473700/linux.svg"
            alt="LINUX"
          />
          <p>LINUX</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
