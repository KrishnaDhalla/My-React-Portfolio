import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
const skills = [
  { skill:  "/html5.png"},
  { skill: "/css.png" },
  { skill: "/javascript.png" },
  { skill: "/react.png" },
  { skill: "/nextjs.png" },
  { skill: "/tailwind.png" },
  { skill: "/bootstrap.png" },
  { skill: "/git.png" },
  { skill: "/github.png" },
  { skill: "/nodejs.png" },
  { skill: "/express.png" },
  { skill: "/mongodb.png" },
  { skill: "/vercel.png" },
  { skill: "/netlify.png" },
];

const About = () => {
  return (
    <div>
    <Head>
      <title>About Me | Krishna Dhalla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <section
      id="about"
      className="bg-white px-10 md:px-16 lg:px-36 dark:bg-gray-900  mx-auto"
    >
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-4xl mb-10">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
              </h1>
              <p>
                Hi, my name is Krishna Dhalla and I am a{" "}
                <span className="font-bold">{" self taught"}</span>
                <span className="font-bold">{"-developer"}</span> from India.
              </p>
              <br />
              <p>
                I'm a pre-final year undergraduate student at Jadavpur
                University right now. Since 2021, I have been working on web
                technology.
              </p>
              <br />
              <p>
                I have a wide range of hobbies and passions that keep me busy.
                From playing sports, traveling, watcting anime, I am always
                seeking new experiences and love to keep myself engaged and
                learning new things.
              </p>
              <br />
              <p>
                I believe that you should{" "}
                <span className="font-bold text-teal-500">
                  never stop growing
                </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always push the limits of what is
                possible. I am excited to see where my career takes me and am
                always open to new opportunities. 🙂
              </p>
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                       className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 border rounded-lg font-semibold"
                    >
                      {/* {item.skill} */}
                      <Image
                      src={item.skill}
                      width={50}
                      height={50}
                      />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </section>
    </div>
  );
};

export default About;
