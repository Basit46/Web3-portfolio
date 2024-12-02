import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (show == false) {
      gsap.to(".bar", { y: 0, stagger: 0.1 });
      gsap.to(".menu-link", { opacity: 1, y: 0, stagger: 0.1, delay: 0.9 });
    } else {
      gsap.to(".bar", { y: "-100%" });
      gsap.to(".menu-link", { opacity: 0, y: 20, stagger: 0.1 });
    }
  };

  useGSAP(
    () => {
      gsap.to(".cover-bars div", { y: "-100%", stagger: 0.1, delay: 1 });
      gsap.to(".cover-bars", { delay: 2.1, autoAlpha: 0 });
    },
    { scope: "body" }
  );

  return (
    <div className="relative min-h-screen bg-black/95 text-white">
      <div className="w-full relative z-[2]">
        <Navbar show={show} setShow={setShow} onClick={handleClick} />
        <Menu show={show} setShow={setShow} />
        <Hero />
        <About />
        <Works />
        <Footer />
      </div>

      <div className="lines-cont fixed top-0 left-0 w-full h-screen flex gap-0">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <div className="cover-bars z-[3] fixed top-0 left-0 w-full h-screen flex gap-0">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default App;
