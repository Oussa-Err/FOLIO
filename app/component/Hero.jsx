import React from "react";

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-start"
      id="Hero"
    >
      <h4>Hello, </h4>
      <h1 className="text-[4rem] font-bold">I am Caio Augusto.</h1>
      <h1 className="text-[4rem] font-bold">I create things for the web.</h1>
      <h2>
        Fullstack developer and designer based in Brazil. I always try to write
        clean code and I value performance.
      </h2>
      <a href="#potfolio">Portfolio</a>
    </section>
  );
};
