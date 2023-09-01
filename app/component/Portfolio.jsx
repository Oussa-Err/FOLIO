import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section className="min-h-screen  gap-4 pt-28  " id="portfolio">
      <h1 className="text-[3rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down after:content-[''] after:w-3/5 after:h-8 after:bg-sky-800 after:absolute after:left-0 after:top-1/2 after:z-[-1] z-10 after:animate-blue-block-slide ">
        Portfolio
      </h1>
      <div className="grid col-span-1 justify-center items-center gap-14">
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
          <div className="flex-1 flex justify-center flex-col gap-8">
            <h3 className="font-mono text-3xl text-center lg:text-left">
              TSF foundation
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-left">
              🔭 I’m currently working on this full stack web application This
              project consists of an application for tracking orders. Developed
              with Next.js library and Node.js for server features.
            </p>
            <div className="w-full flex justify-between">
              <a
                href="https://tsf-foundation.vercel.app"
                target="_blank"
                className="text-lg"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/TSF-FOUNDATION"
                target="_blank"
                className="text-lg"
              >
                Source
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/tsf-project-screenshot.png"
              width={700}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
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
              <a
                href="https://farmkhemisset.com/"
                target="_blank"
                className="text-lg"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/solid-spork"
                target="_blank"
                className="text-lg"
              >
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
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
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
              <a
                href="https://gpt3project1.netlify.app/"
                target="_blank"
                className="text-lg"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/improved-manoeuvre"
                target="_blank"
                className="text-lg"
              >
                Source
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/assets/gpt3Project.png" width={700} height={300} />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
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
              <a
                href="https://oussa-err.github.io/playPlay/"
                target="_blank"
                className="text-lg"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/playPlay"
                target="_blank"
                className="text-lg"
              >
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
