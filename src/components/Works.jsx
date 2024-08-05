import React from "react";
import { projects } from "../works";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import bg from "../assets/bg.jpg";

const Works = () => {
  return (
    <div id="works" className="">
      <h1 className="text-[3rem] vsm:text-[5rem] font-extrabold mx-[10%] pt-[50px] leading-[1.0]">
        Proof of Work:
      </h1>

      <div className="mt-[60px] mx-[10%] lg:mx-0 lg:mt-[30px] flex flex-col gap-[50px] sm:gap-[70px] lg:gap-[30px]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col-reverse lg:flex-row h-fit lg:h-[50vh] lg:items-center gap-[20px] lg:gap-0"
          >
            <div className="lg:ml-[10%] lg:w-[30%] h-full lg:pt-[100px]">
              <h1 className="text-[2.5rem] vsm:text-[3rem] font-extrabold leading-none">
                {project.name}
              </h1>
              <p className="mt-[10px] mb-[10px] lg:mb-[30px] vsm:text-[1.2rem] leading-[1.1]">
                {project.desc}
              </p>

              <a
                className="text-[1.2rem] vsm:text-[1.5rem] flex"
                href={project.link}
                target="blank"
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
