import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section
      className="min-h-screen grid gap-4 pt-28  "
      id="portfolio"
    >
      <h1 className="text-[3rem] pb-4 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down">
        Portfolio
      </h1>
      <div className="grid col-span-1 justify-center items-center gap-14">
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
          <div className="flex-1 flex justify-center flex-col gap-8">
            <h3 className="font-mono text-3xl text-center lg:text-left">
              Healthy Farm
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-left">
              This project consists of an application for tracking orders. Just
              enter the tracking code, and if valid, the information is returned
              in detail. The data comes through an API. Developed with React.js.
            </p>
            <div className="w-full flex justify-between">
              <a href="" className="text-2xl">
                Visit <span className="text-4xl font-extrabold">&rarr;</span>
              </a>
              <a href="" className="text-2xl">
                Source
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/healthyfarmProject.png"
              width={700}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
          <div className="flex-1 flex justify-center flex-col gap-8">
            <h3 className="font-mono text-3xl text-center lg:text-left">
              GPT3
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-left">
              This project consists of an application for tracking orders. Just
              enter the tracking code, and if valid, the information is returned
              in detail. The data comes through an API. Developed with React.js.
            </p>
            <div className="w-full flex justify-between">
              <a href="" className="text-2xl">
                Visit <span className="text-4xl font-extrabold">&rarr;</span>
              </a>
              <a href="" className="text-2xl">
                Source
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/assets/gpt3Project.png" width={700} height={300} />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
          <div className="flex-1 flex justify-center flex-col gap-8">
            <h3 className="font-mono text-3xl text-center lg:text-left">
              Play play
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-left">
              This project consists of an application for tracking orders. Just
              enter the tracking code, and if valid, the information is returned
              in detail. The data comes through an API. Developed with React.js.
            </p>
            <div className="w-full flex justify-between">
              <a href="" className="text-2xl">
                Visit <span className="text-4xl font-extrabold">&rarr;</span>
              </a>
              <a href="" className="text-2xl">
                Source
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/assets/playplayProject.png" width={700} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};
