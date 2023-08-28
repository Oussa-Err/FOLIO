import React from "react";

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex gap-4 flex-col justify-center items-start"
      id="Hero"
    >
      <h4 className="text-[1rem] md:text-[3rem] font-semibold animate-button-rotate ">Hello! </h4>
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold">I am Oussama <span className="text-orange-400">Err</span>aoui.</h1>
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold">I create things for the web.</h1>
      <h2>
        Fullstack developer <em className="line-through">and designer</em> based in Morocco. I always try to write
        clean code and I value performance.
      </h2>
      <div>
        <a href="#portfolio">Portfolio</a>
      </div>
    </section>
  );
};
