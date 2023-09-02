"use client"
import Image from "next/image";
import React from "react";
import AnimatedSections from "../hooks/AnimatedSections";



export const Hero = () => {
  const {observerRef, myElementVisible} = AnimatedSections()


  return (
    <section
      ref={observerRef}
      className={myElementVisible? `min-h-screen flex gap-4 flex-col justify-center items-start animate-fade-slide-down pt-16 sm:pt-0`: `min-h-screen flex gap-4 flex-col justify-center items-start pt-16 sm:pt-0`}
      id="Hero"
    >
      <div className="flex flex-col m-auto items-start justify-center">
        <div className="flex gap-2">
          <h4 className="text-[2rem] md:text-[2.2rem] animate-">
            Hello!
          </h4>
          <Image src={"/assets/hands.svg"} className='animate-shakeHands -z-10' width={32} height={32} />
        </div>
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4.8rem] font-bold">
          I am Oussama <span className="text-orange-400">Err</span>aoui.
        </h1>
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4.8rem] font-bold">
          I create things for the web.
        </h1>
        <h4 className="text-xl py-8">
          Fullstack developer&nbsp;<em className="line-through">and designer</em>
          &nbsp;based in Morocco. <br/>I always try to write clean code and I value
          performance.
        </h4>
          <a href="#portfolio"  className="py-[12px] px-[40px] md:mt-8 rounded-md bg-sky-600 hover:-translate-y-2 transition-all ease-in-out cursor-pointer">Portfolio</a>
      </div>
    </section>
  );
};
