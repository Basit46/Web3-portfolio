import React, { useEffect, useState } from "react";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

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

  return (
    <div id="hero" className="hero w-full relative h-screen pt-[150px]">
      <h1 className="relative z-[2] pl-[10%] lg:pl-[20%] ml-[-5px] sm:ml-[-10px] text-[7rem] xmd:text-[10rem] lg:text-[13rem] font-extrabold leading-none">
        I'm Basit
      </h1>
      <p className="relative z-[2] pl-[10%] sm:pl-[20%] vsm:text-[1.3rem]">
        A creative <span className="text-[#00FFFF]">WEB3</span> website
        developer
      </p>

      <div className="absolute z-[2] bottom-[50px] right-[10%] w-[30%] vsm:w-[20%] xmd:w-[10%]">
        <a
          href="https://t.me/CodeBender"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Telegram</p>
          <Arrow />
        </a>
        <a
          href="https://x.com/Basit_js"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Twitter</p>
          <Arrow />
        </a>
        <a
          href="mailto:hassanbasitope@gmail.com"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Mail</p>
          <Arrow />
        </a>
        <a
          href="https://signal.me/#eu/2_4k5O33ywFdQW-0-j2Yp4oWF87yUU5dYieUBwXpRI6AJmm2q35JKLBYv1S_EGe3"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Signal</p>
          <Arrow />
        </a>
      </div>

      <div className="absolute z-[2] bottom-[50px] left-[10%] w-[30%] vsm:w-[20%] xmd:w-[10%]">
        <p className="uppercase">
          {location?.country_calling_code} {location?.country_name}
        </p>
        <p>{date}</p>
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
