import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STACK = [
  "React.js",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn/ui",
  "Node.js",
  "Express.js",
  "Firebase",
  "Supabase",
  "Ethers.js",
  "Web3.js",
  "Redux Toolkit",
  "Zustand",
  "TanStack Query",
  "Motion",
  "REST APIs",
  "Git",
  "GitHub",
  "Zod",
];

const About = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.from(".about1", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });

      gsap.from(".stack-pill", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 40%",
        },
      });
    },
    { scope: aboutRef },
  );

  return (
    <div id="about" ref={aboutRef} className="py-16 md:py-24 lg:py-32">
      <div className="about1 px-[6%] sm:px-[8%] lg:px-[10%] max-w-[1200px]">
        <h1
          className="font-bold leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
        >
          I build <br />
          <span className="text-[aqua]">products</span> <br />
          that actually ship.
        </h1>

        <p
          className="mt-5 md:mt-7 max-w-[540px] leading-relaxed text-white/60"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
        >
          Full-stack and mobile engineer focused on performant UIs, clean
          architecture and on-chain integrations from pixel-perfect frontends to
          production.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3 max-w-[620px]">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="stack-pill px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm md:text-[0.9rem] whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
