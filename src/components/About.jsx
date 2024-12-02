import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.from(".about1", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });
    },
    { scope: aboutRef }
  );

  return (
    <div id="about" ref={aboutRef} className="py-[80px] md:py-[100px]">
      <div className="about1 pl-[10%] relative z-[2]">
        <h1 className="capitalize text-[3rem] sm:text-[4rem] font-bold leading-[1.0]">
          Building for <br /> <span className="text-[aqua]">Web2</span> and{" "}
          <span className="text-[aqua]">Web3</span> <br /> Projects
        </h1>
        <p className="w-[70%] vsm:w-[50%] mt-[20px] text-[1.2rem]">
          Frontend and Full-Stack Tech Stack: React.js, Next.js, Tailwind CSS,
          Node.js, Express.js, Firebase, Web3.js, Ethers.js, Redux Toolkit and
          REST APIs.
        </p>
      </div>
    </div>
  );
};

export default About;
