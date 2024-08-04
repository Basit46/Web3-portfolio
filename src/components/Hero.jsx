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
      <h1 className="relative z-[2] pl-[20%] ml-[-10px] text-[13rem] font-extrabold leading-[1.0]">
        I'm Basit
      </h1>
      <p className="relative z-[2] pl-[20%] text-[1.3rem]">
        A creative <span className="text-[#00FFFF]">WEB3</span> website
        developer
      </p>

      <div className="absolute bottom-[50px] right-[10%] w-[10%]">
        <a
          href="google.com"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Telegram</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Twitter</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Mail</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex justify-between py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[1.1rem]">Discord</p>
          <Arrow />
        </a>
      </div>

      <div className="absolute bottom-[50px] left-[10%] w-[10%]">
        <p className="uppercase">
          {location?.country_calling_code} {location?.country_name}
        </p>
        <p>{date}</p>
      </div>

      <img
        className="absolute bottom-0 left-[30%] w-[10%]"
        src={img1}
        alt="art"
      />
      <img
        className="absolute top-[10%] right-[0%] w-[10%]"
        src={img2}
        alt="art"
      />
      <img
        className="absolute bottom-[20%] right-[30%] w-[10%]"
        src={img3}
        alt="art"
      />
    </div>
  );
};

export default Hero;
