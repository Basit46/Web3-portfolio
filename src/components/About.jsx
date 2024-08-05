import React from "react";

const About = () => {
  return (
    <div id="about" className="my-[80px] md:my-[100px]">
      <div className="pl-[10%] relative z-[2]">
        <h1 className="capitalize text-[3rem] sm:text-[4rem] font-bold leading-[1.0]">
          building <span className="text-[aqua]">dynamic</span> and <br />{" "}
          engaging platforms for:
        </h1>
        <p className="w-[70%] vsm:w-[50%] mt-[20px] text-[1.2rem]">
          Memecoins, DAOs, NFT Projects, DeFi Projects, Crypto Wallets,
          Blockchain Integrations, Token Launch Platforms, Crypto Exchanges,
          Web3 Gaming, ...and many more.
        </p>
      </div>
    </div>
  );
};

export default About;
