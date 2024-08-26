import React from "react";
import { FaBarsStaggered as Bars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Menu = ({ show, setShow }) => {
  return (
    <div
      className={`menu ${
        !show && "hidden"
      } z-[10] fixed top-0 left-0 w-screen h-screen`}
    >
      <div className="w-full h-full flex">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="absolute top-0 left-0 size-full flex flex-col justify-center gap-[10px]">
        <Link
          className="menu-link"
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => setShow(false)}
        >
          Home
        </Link>
        <Link
          className="menu-link"
          to="works"
          smooth={true}
          duration={500}
          onClick={() => setShow(false)}
        >
          Works
        </Link>
        <Link
          className="menu-link"
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setShow(false)}
        >
          About
        </Link>
        <Link
          className="menu-link"
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setShow(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Menu;
