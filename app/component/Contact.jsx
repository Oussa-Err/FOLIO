import React from "react";
import AnimatedSections from './AnimatedSections'

export const Contact = () => {
  return (
    <section
      className="min-h-screen gap-8  flex flex-col justify-center items-center animate-fade-slide-down"
      id="contact"
    >
            <AnimatedSections />
      <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold">
        Contact
      </h1>
      <p className="max-w-xl text-center">
        If you want to carry out a project or chat with me, do not hesitate to
        send me an email:
        <a
          target={"mailTo"}
          href="erraoui.ouss@gmail.com"
          className="text-sky-500"
        >
          {" "}
          erraoui.ouss@gmail.com
        </a>
      </p>
      <a
        href="https://linktr.ee/oussamaerr"
        target={"_blank"}
        className="py-[12px] px-[40px] md:mt-8 rounded-md bg-sky-600 hover:scale-110 transition-all ease-in-out"
      >
        Contact
      </a>
    </section>
  );
};
