import React from "react";
import "./intro.css";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <>
      <div>
        <div
          class="w-0 h-0 absolute z-10 
  md:border-l-[0] border-l-transparent
  md:border-b-[46.3em] border-b-[#121111]
  md:border-r-[30em] border-r-transparent drop-shadow-xl "
        ></div>
        <div
          class="w-0 h-0 absolute z-0
  md:border-l-[94.95em] border-l-transparent
  md:border-b-[46.3em] border-b-[#202021]
  md:border-r-[0] border-r-transparent "
        ></div>
        <div
          class="w-0 h-0 absolute z-20 ml-[64.9rem]
  md:border-l-[30em] border-l-transparent
  md:border-b-[46.3em] border-b-black
  md:border-r-[0] border-r-transparent "
        ></div>
      </div>
      <div className="md:flex">
        <div className="my-[250px] md:ml-[280px] text-[2rem] ml-5 pb-20">
          <h1 className="font-bold font-Devanagri ">नमस्कार</h1>
          <p className="font-Lora">
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
                1000,
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
          className="blob md:ml-[180px] md:mt-[100px] mt-10 "
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
