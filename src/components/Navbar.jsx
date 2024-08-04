import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered as Bars } from "react-icons/fa6";

const Navbar = ({ show, setShow, onClick }) => {
  return (
    <nav
      className={`${
        show ? "text-black" : "text-white"
      } fixed z-[11] w-full px-[10%] py-[20px] flex justify-between items-center`}
    >
      <h1 className={`text-[2rem]`}>Basit</h1>
      <button
        onClick={() => {
          setShow((prev) => !prev);
          onClick();
        }}
      >
        {show ? (
          <FaTimes className="text-[2rem] text-[red]" />
        ) : (
          <Bars className="text-[2rem]" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
