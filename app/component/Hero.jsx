"use client";
import Image from "next/image";
import AnimatedSections from "../hooks/AnimatedSections";
import Type from "../hooks/TypeWriter";

export default function Hero() {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      className="min-h-screen flex gap-4 flex-col justify-center items-start"
      id="Hero"
    >
      <div className="flex flex-col m-auto items-start justify-center">
        <div
          ref={observerRef}
          className={`flex gap-2 ${
            myElementVisible ? "animate-fade-out-toggleMenu" : ""
          }`}
        >
          <h4 className="text-[2rem] md:text-[2.2rem]">Hello!</h4>
          <Image
            src={"/assets/hands.svg"}
            alt="hands"
            className="animate-shakeHands"
            width={32}
            height={32}
          />
        </div>
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4.8rem] font-bold">
          I am Oussama <span className="text-orange-400">Err</span>aoui.
        </h1>
        <h1 className="text-[1.2rem] md:text-[2.3rem] font-bold">
          <Type />
        </h1>
        <h4
          ref={observerRef}
          className={`text-xl py-8 ${
            myElementVisible ? `animate-fade-out` : ``
          }`}
        >
          Fullstack developer&nbsp;
          <em className="line-through">and designer</em>
          &nbsp;based in Morocco. <br />I always try to write clean code and I
          value performance.
        </h4>
        <div
          ref={observerRef}
          className={`py-[12px] px-[40px] md:mt-8 rounded-md bg-transparent hover:text-white focus:outline-none border-[1.5px] border-white hover:border-blue-400 hover:border-[1px] transition-all ease-in-out text-lg text-sky-100 inline-block ${
            myElementVisible ? "animate-fade-out" : ""
          }`}
        >
          <a href="/assets/curriculum-vitae-en-version.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}


console.log(`

_______  _______  _______    
(  ____ \(  ____ )(  ____ )   
| (    \/| (    )|| (    )|   
| (__    | (____)|| (____)|   
|  __)   |     __)|     __)   
| (      | (\ (   | (\ (      
| (____/\| ) \ \__| ) \ \__ _ 
(_______/|/   \__/|/   \__/(_)
                             

`)