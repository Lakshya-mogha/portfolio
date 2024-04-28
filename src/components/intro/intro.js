import React from "react";
import "./intro.css";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <>
      <div className="md:flex">
        <div className="my-[250px] md:ml-[280px] text-[2rem] ml-5 pb-20">
          <h1 className="font-bold">नमस्कार</h1>
          <p className="">
            I'm Lakshya Mogha,
            <br />
            <TypeAnimation
              sequence={[
                "I am a frontend developer",
                1000, 
                "I am a backend developer",
                1000,
                "I am a full stack developer",
                1000,
                "I am a web designer",
                1000,
                "I am a coding enthusiast",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ position: "absolute" }}
              repeat={Infinity}
            />
            <br />
          </p>
        </div>
        {/* <img
          src="./img/OIcVN0R7Yxstun0LPdOkl-transformed-removebg-preview.png"
          alt=""
          className="blob md:ml-[180px] md:mt-[100px] mt-10"
        /> */}
      </div>
      {/* <p className="py-[8rem] mt-[180px]  text-[1.6rem] ml-10 pb-20">
        <hr />
        I'm a passionate learner and I love to learn new things.
        <br />
        I'm currently pursuing my Bachelor's Degree in computer applications
        <br />
      </p> */}
    </>
  );
}

export default Intro;
