import React, { useRef } from "react";
import { projects } from "../works";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import bg from "../assets/bg.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Works = () => {
  const worksRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: worksRef.current, start: "top 60%" },
      });

      tl.from(".works-text1", {
        opacity: 0,
        y: 50,
      }).from(".projects", {
        opacity: 0,
        y: 20,
      });
    },
    { scope: worksRef },
  );

  return (
    <div id="works" ref={worksRef} className="">
      <h1 className="works-text1 text-[3rem] vsm:text-[5rem] font-extrabold mx-[10%] leading-[1.0]">
        Proof of Work:
      </h1>

      <div className="projects mt-[60px] mx-[10%] lg:mx-0 lg:mt-[30px] flex flex-col gap-[50px] sm:gap-[70px] lg:gap-[30px]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project flex flex-col-reverse lg:flex-row h-fit lg:h-[50vh] lg:items-center gap-[20px] lg:gap-0"
          >
            <div className="lg:ml-[10%] lg:w-[30%] h-full lg:pt-[100px] pr-[10px]">
              <h1 className="project-text1 text-[2.5rem] vsm:text-[3rem] font-extrabold leading-none">
                {project.name}
              </h1>
              <p className="project-text2 mt-[10px] mb-[10px] lg:mb-[30px] vsm:text-[1.2rem] leading-[1.1]">
                {project.desc}
              </p>

              <a
                className="project-text3 text-[1.2rem] vsm:text-[1.5rem] flex"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Live</span> <Arrow />
              </a>
            </div>

            <div className="relative h-full flex-1 lg:mr-[10%] p-[30px] sm:p-[40px]">
              <img
                className="absolute top-0 left-0 size-full"
                src={bg}
                alt="bg"
              />
              <img
                className="relative z-[2] h-full w-full object-contain"
                src={project.img}
                alt="project"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
