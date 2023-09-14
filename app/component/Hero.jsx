"use client";
import Image from "next/image";
import AnimatedSections from "../hooks/AnimatedSections";
import Type from "../hooks/TypeWriter";

export const Hero = () => {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      className="min-h-screen flex gap-4 flex-col justify-center items-start "
      id="Hero"
    >
      <div className=" `flex flex-col m-auto items-start justify-center">
        <div
          ref={observerRef}
          className={
            myElementVisible
              ? `flex gap-2 animate-fade-out-toggleMenu`
              : `flex gap-2`
          }
        >
          <h4 className="text-[2rem] md:text-[2.2rem]">Hello!</h4>
          <Image
            src={"/assets/hands.svg"}
            className="animate-shakeHands -z-10"
            width={32}
            height={32}
          />
        </div>
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4.8rem] font-bold">
          I am Oussama <span className="text-orange-400">Err</span>aoui.
        </h1>
        <h1 className="text-[1.9rem] md:text-[3rem] font-bold">
          <Type />
        </h1>
        <h4
          ref={observerRef}
          className={
            myElementVisible ? `text-xl py-8 animate-fade-out` : `text-xl py-8`
          }
        >
          Fullstack developer&nbsp;
          <em className="line-through">and designer</em>
          &nbsp;based in Morocco. <br />I always try to write clean code and I
          value performance.
        </h4>
        <div ref={observerRef}
            className={
              myElementVisible
                ? `py-[12px] px-[40px] md:mt-8 rounded-md bg-transparent border-2 border-sky-700 hover:-translate-y-2 transition-all ease-in-out text-lg text-sky-100 animate-fade-out inline-block`
                : `py-[12px] px-[40px] md:mt-8 rounded-md bg-transparent border-2 border-sky-700 hover:-translate-y-2 transition-all ease-in-out text-lg text-sky-100`
            }>
          <a
            href="/assets/curriculum-vitae-en-version.pdf"
            target='_blank'
            style={{ width: '100%', height: '100%' }}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};
