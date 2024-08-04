import React from "react";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="px-[10%] mt-[50px] h-screen py-[50px] flex flex-col justify-between"
    >
      <h1 className="text-center text-[7rem] font-extrabold ">Let's Connect</h1>

      <div className="w-full">
        <a
          href="google.com"
          target="blank"
          className="flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Telegram</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Twitter</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Mail</p>
          <Arrow />
        </a>
        <a
          href="google.com"
          target="blank"
          className="flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Discord</p>
          <Arrow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
