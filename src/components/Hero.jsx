import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ThreeD from "./ThreeD";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const [location, setLocation] = useState({});
  const [date, setDate] = useState("");
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((err) => {
        console.log(err);
        setLocation({});
      });
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const heroRef = useRef();
  var tl = gsap.timeline({ delay: 1.5 });
  useGSAP(
    () => {
      const splitText = new SplitType(".herotext1", {
        types: "words",
      });

      tl.from(".herotext1 .word", {
        opacity: 0,
        x: -50,
        stagger: 0.4,
      })
        .from(".herotext2", {
          opacity: 0,
          duration: 1,
        })
        .from(".herotext3", {
          opacity: 0,
          y: 20,
          stagger: 0.05,
        })
        .from(".herotext4", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
        });
    },
    { scope: heroRef }
  );

  return (
    <div
      id="hero"
      ref={heroRef}
      className="hero w-full relative h-screen pt-[150px]"
    >
      <ThreeD />

      <h1 className="herotext1 relative z-[2] pl-[10%] lg:pl-[20%] ml-[-5px] sm:ml-[-10px] text-[7rem] xmd:text-[10rem] lg:text-[13rem] font-extrabold leading-none">
        I'm Basit
      </h1>
      <p className="herotext2 relative z-[2] pl-[10%] sm:pl-[20%] vsm:text-[1.3rem]">
        A <span className="text-[#00FFFF]">creative</span> Website and App
        developer
      </p>

      <div className="absolute z-[2] bottom-[50px] right-[10%] w-[30%] vsm:w-[20%] xmd:w-[10%]">
        <a
          href="https://t.me/CodeBender"
          target="blank"
          className="herotext4 flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Telegram</p>
          <Arrow />
        </a>
        <a
          href="https://x.com/Basit_js"
          target="blank"
          className="herotext4 flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Twitter</p>
          <Arrow />
        </a>
        <a
          href="mailto:hassanbasitope@gmail.com"
          target="blank"
          className="herotext4 flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Mail</p>
          <Arrow />
        </a>
        <a
          href="https://github.com/Basit46"
          target="blank"
          className="herotext4 flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Github</p>
          <Arrow />
        </a>
      </div>

      <div className="absolute z-[2] bottom-[50px] left-[10%] w-[30%] vsm:w-[20%] xmd:w-[10%]">
        <p className="uppercase herotext3">
          {location?.country_calling_code} {location?.city}
        </p>
        <p className="herotext3">{date}</p>
      </div>

      <img
        className="absolute bottom-[20%] vsm:bottom-0 left-[20%] vsm:left-[30%] w-[20%] md:w-[10%]"
        src={img1}
        alt="art"
      />
      <img
        className="absolute top-[10%] right-[0%] w-[20%] md:w-[10%]"
        src={img2}
        alt="art"
      />
      <img
        className="absolute bottom-[40%] sm:bottom-[20%] right-[30%] w-[20%] md:w-[10%]"
        src={img3}
        alt="art"
      />
    </div>
  );
};

export default Hero;
