import React from "react";
import { projects } from "../works";

const Works = () => {
  return (
    <div id="works" className="">
      <h1 className="text-[5rem] font-extrabold pl-[10%] pt-[50px]">
        Proof of Work
      </h1>

      <div className="mt-[30px] flex flex-col gap-[30px]">
        {projects.map((project, i) => (
          <div key={i} className="flex h-[50vh] items-center">
            <div className="ml-[10%] w-[30%] h-full pt-[100px]">
              <h1 className="text-[3rem] font-extrabold leading-none">
                {project.name}
              </h1>
              <p className="mt-[10px] mb-[30px]">{project.desc}</p>

              <a
                className="w-full border-y border-gray-500 px-[20px] py-[10px] text-[1.5rem]"
                href={project.link}
                target="blank"
              >
                View Live
              </a>
            </div>
            <div
              style={{ backgroundImage: "url('src/assets/bg.jpg')" }}
              className="h-full flex-1 mr-[10%] p-[50px]"
            >
              <img
                className="h-full w-full object-contain"
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
