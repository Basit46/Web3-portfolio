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

      tl.from(".works-title", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
      }).from(".project-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
      });
    },
    { scope: worksRef },
  );

  return (
    <div id="works" ref={worksRef} className="py-16 md:py-24 lg:py-32">
      <div className="px-[6%] sm:px-[8%] lg:px-[10%]">
        <h1
          className="works-title font-extrabold leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Proof of Work.
        </h1>
        <p
          className="mt-4 text-white/50 max-w-[400px]"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
        >
          A selection of projects built across web and on-chain.
        </p>
      </div>

      <div className="mt-16 md:mt-20 flex flex-col">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card group px-[6%] sm:px-[8%] lg:px-[10%] py-10 md:py-14 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 transition-colors duration-300"
          >
            <div className="lg:w-[38%] flex flex-col gap-4 shrink-0">
              <span className="text-white/30 text-sm font-medium tracking-widest uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h2
                className="font-extrabold leading-none tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                {project.name}
              </h2>

              <p
                className="text-white/60 leading-relaxed max-w-[420px]"
                style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)" }}
              >
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[aqua] font-medium w-fit border-b border-transparent hover:border-[aqua] transition-all duration-200"
                style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
              >
                View Live <Arrow className="text-lg" />
              </a>
            </div>

            <div className="relative flex-1 rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:h-[320px]">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                src={bg}
                alt=""
              />
              <img
                className="relative z-[2] w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                src={project.img}
                alt={project.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
