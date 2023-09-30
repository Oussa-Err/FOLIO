"use client";
import AnimatedSections from "../hooks/AnimatedSections";

export const Contact = () => {
  const elementRef = AnimatedSections();
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      className="h-[40rem] gap-8 flex flex-col justify-center items-center"
      id="contact"
      ref={observerRef}
    >
      <h1
        className={myElementVisible? `text-[3rem] block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down after:content-[''] after:w-full after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 after:top-[2.8rem] sm:after:top-1/2 after:z-[-1] z-10 after:animate-blue-block-slide`: `text-[3rem] block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold after:content-[''] after:w-full after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute  after:left-0 after:top-1/2 after:z-[-1] z-10`}
      >
        Contact
      </h1>
      <p 
      ref={observerRef}
      className={
        myElementVisible ? `ttext-xl lg:w-2/5 text-center animate-fade-out` : `text-xl lg:w-2/5 text-center`
      }
      >
        If you want to carry out a project or chat with me, do not hesitate to
        send me an email:&nbsp;
        <a href="mailto:erraoui.ouss@gmail.com" className="text-sky-500 cursor-pointer md:cursor-none">
          erraoui.ouss@gmail.com
        </a>
      </p>
      <a
        href="https://linktr.ee/oussamaerr"
        target={"_blank"}
        className="cursor-pointer md:cursor-none py-[12px] px-[40px] md:mt-8 rounded-md bg-sky-600 hover:-translate-y-2 transition-all ease-in-out"
      >
        Contact
      </a>
    </section>
  );
};
