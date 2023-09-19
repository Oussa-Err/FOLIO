"use client";
import AnimatedSections from "../hooks/AnimatedSections";

export const Contact = () => {
  const elementRef = AnimatedSections();
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      ref={observerRef}
      className={myElementVisible? `h-[40rem] gap-8 flex flex-col justify-center items-center animate-fade-slide-down`: `gap-8 flex flex-col justify-center items-center h-auto`}
      id="contact"
    >
      <h1
        className={myElementVisible? `text-[3rem] block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down after:content-[''] after:w-full after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 after:top-1/2 after:z-[-1] z-10 after:animate-blue-block-slide`: `text-[3rem] block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold after:content-[''] after:w-full after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute  after:left-0 after:top-1/2 after:z-[-1] z-10`}
        ref={elementRef}
      >
        Contact
      </h1>
      <p className="text-xl lg:w-2/5 text-center">
        If you want to carry out a project or chat with me, do not hesitate to
        send me an email:&nbsp;
        <a href="mailto:erraoui.ouss@gmail.com" className="text-sky-500">
          erraoui.ouss@gmail.com
        </a>
      </p>
      <a
        href="https://linktr.ee/oussamaerr"
        target={"_blank"}
        className="py-[12px] px-[40px] md:mt-8 rounded-md bg-sky-600 hover:-translate-y-2 transition-all ease-in-out"
      >
        Contact
      </a>
    </section>
  );
};
