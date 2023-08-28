import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section
      className="min-h-screen  grid col-span-1 justify-center items-center animate-fade-slide-down"
      id="portfolio"
    >
      <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold">Portfolio</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
        <div className="flex-1 flex flex-col gap-14">
          <h3 className="font-mono text-3xl text-center lg:text-left">Healthy Farm</h3>
          <p className="text-center text-lg sm:text-xl">
            This project consists of an application for tracking orders. Just
            enter the tracking code, and if valid, the information is returned
            in detail. The data comes through an API. Developed with React.js.
          </p>
          <div className="w-full flex justify-between">
            <a href="" className="text-2xl">Visit <span className="text-4xl font-extrabold">&rarr;</span></a>
            <a href="" className="text-2xl">Source</a>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/assets/healthy-farm" width={200} height={300} />
        </div>
      </div>
    </section>
  );
};
