import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { FaEnvelope, FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import kd from "../public/kdavatar.webp";
const Hero = () => {
  return (
    <div>
      <div className="text-center ">
        <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl ">
          Hi, I'm Krishna Dhalla
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          FullStack Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
          I'm a self-taught developer from India. I love building cool stuff for
          web using: Javascript, ReactJS, NodeJS, NextJs and MongoDB.
        </p>
      </div>
      <div className="text-3xl flex justify-center gap-10 lg:gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://twitter.com/krishna_dhalla" target={"_blank"}>
          <AiFillTwitterCircle className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-d-4007731a4/"
          target={"_blank"}
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/KrishnaDhalla" target={"_blank"}>
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a href="mailto:krishnadhallakd@gmail.com" target={"_blank"}>
          <FaEnvelope className="cursor-pointer" />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1cN-2Q8mxLkaaDDP1mctwq09AY_9PhPOF?usp=share_link"
          target={"_blank"}
        >
          <FaFilePdf className="cursor-pointer" />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-10 md:h-72 md:w-72">
        <Image alt="my image" src={kd} fill object-cover className="" />
      </div>
    </div>
  );
};

export default Hero;
