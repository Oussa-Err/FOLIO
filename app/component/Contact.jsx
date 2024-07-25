"use client";
import AnimatedSections from "../hooks/AnimatedSections";

export default function Contact() {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      className="h-[40rem] gap-8 flex flex-col justify-center items-center"
      id="contact"
      ref={observerRef}
    >
      <h1
        className={`text-[3rem] block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold after:content-[''] after:w-full after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 after:z-[-1] z-10 ${
          myElementVisible
            ? "after:top-[2.8rem] sm:after:top-1/2 after:animate-blue-block-slide animate-fade-slide-down"
            : "after:top-1/2"
        }`}
      >
        Contact
      </h1>
      <p
        ref={observerRef}
        className={`text-xl lg:w-2/5 text-center ${
          myElementVisible && "animate-fade-out"
        }`}
      >
        If you want to carry out a project or chat with me, do not hesitate to
        send me an email:&nbsp;
        <a href="mailto:erraoui.ouss@gmail.com" className="text-sky-500">
          erraoui.ouss@gmail.com
        </a>
      </p>
      <a
        href="https://linktr.ee/oussamaerr"
        target="_blank"
        className="cursor-pointer py-[12px] px-[40px] md:mt-8 rounded-md bg-sky-600 hover:-translate-y-2 transition-all ease-in-out"
      >
        Contact
      </a>
    </section>
  );
}
