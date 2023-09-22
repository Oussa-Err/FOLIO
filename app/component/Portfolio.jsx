"use client";
import Image from "next/image";
import AnimatedSections from "../hooks/AnimatedSections";

export const Portfolio = () => {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      className="min-h-screen w-full md:w-4/5 m-auto gap-4 mt-24"
      id="portfolio"
      ref={observerRef}
    >
      <h1
        ref={observerRef}
        className={
          myElementVisible
            ? `text-[3rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down after:content-[''] after:w-3/5 after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 after:top-[2.8rem] md:after:top-1/2 after:z-[-1] z-10 after:animate-blue-block-slide `
            : `text-[3rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold after:content-[''] after:w-3/5 after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 sm:after:top-1/2 after:top-2/4 after:z-[-1] z-10  `
        }
      >
        Portfolio
      </h1>
      <div className="grid col-span-1 justify-center items-center gap-14">
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
          <div className="flex-1 flex justify-center flex-col gap-8">
            <h3 className="font-mono text-3xl text-center lg:text-left">
              TSF foundation
            </h3>
            <p className="text-center text-lg sm:text-xl md:text-left ">
              🔭 Crafting a full stack web application focused on TSF
              Foundation's mission. Utilizing Next.js and Node.js to build a
              dynamic platform that seamlessly connects purpose and technology.
            </p>
            <div className="w-full flex justify-between">
              <a
                href="https://tsf-foundation.vercel.app"
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/TSF-FOUNDATION"
                target="_blank"
                className="text-lg font-semibold hover:underline"
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
              Introducing a comprehensive e-commerce platform devoted to organic
              living. Responsive interface that smoothly adapts to various
              screen sizes. This project was powered by VITE for optimized
              performance and development efficiency.
            </p>
            <div className="w-full flex justify-between">
              <a
                href="https://farmkhemisset.com/"
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/solid-spork"
                target="_blank"
                className="text-lg font-semibold hover:underline"
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
              My first single-page web project, where design meets simplicity.
              Crafted with Create React App (CRA), this creation is all about
              aesthetics and layout design.
            </p>
            <div className="w-full flex justify-between">
              <a
                href="https://gpt3project1.netlify.app/"
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/improved-manoeuvre"
                target="_blank"
                className="text-lg font-semibold hover:underline"
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
              Discover laughter with our Meme, Jokes, Riddles, and More
              Generator! Crafted using HTML, CSS, and Vanilla JavaScript, I used
              APIs to serve up a dynamic selection of entertaining content.
            </p>
            <div className="w-full flex justify-between">
              <a
                href="https://playplay.netlify.app/"
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                Visit <span className="text-xl font-extrabold">&rarr;</span>
              </a>
              <a
                href="https://github.com/Oussa-Err/playPlay"
                target="_blank"
                className="text-lg font-semibold hover:underline"
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
