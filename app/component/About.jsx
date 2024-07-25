"use client";
import AnimatedSections from "../hooks/AnimatedSections";

export default function About() {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section
      ref={observerRef}
      className="min-h-screen flex justify-center"
      id="about"
    >
      <div className="flex flex-col">
        <h1
          className={`text-[2rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[4rem] font-bold after:content-[''] after:w-1/4 after:h-4 sm:after:h-6 after:bg-sky-800 after:absolute after:left-0 after:top-1/3 sm:after:top-1/2 after:z-[-1] z-10 
            ${
              myElementVisible &&
              "after:animate-blue-block-slide animate-fade-slide-down"
            }`}
        >
          Know Who I'M
        </h1>
        <div
          ref={observerRef}
          className={`flex flex-col gap-4 lg:max-w-6xl sm:gap-8 ${
            myElementVisible && "animate-fade-out"
          }`}
        >
          <p className="md:text-xl animate-fade-out">
            My name is Oussama, I’m from Morocco and I’m
            {new Date().getFullYear() - 2001} years old.
          </p>
          <p className="md:text-lg animate-fade-out">
            I describe myself as a passionate developer with a love for coding,
            open source, and creating both web and desktop applications.
          </p>
          <p className="md:text-lg animate-fade-out">
            Apart from my professional work, I enjoy creating and contributing
            to various projects. This allows me to learn a lot of new things,
            grow as a developer, and support different initiatives.
          </p>
          <p className="md:text-lg animate-fade-out">
            My passion for technology was born when I was 5 years old, when I
            first used a computer.
          </p>
          <p className="md:text-lg animate-fade-out">
            I started as a Front-end Developer on 3/01/2023. Since then I have
            been dedicating about 10 hours a day to studies.
          </p>
          <p className="md:text-lg animate-fade-out">
            Codes, series, video games, music, podcast and studies are subjects
            that interest me.
          </p>
          <p className="md:text-lg animate-fade-out">
            I see that I am on the right path because I love helping people who
            are starting out, just as I was a beginner. Furthermore, I see the
            results that the dedicated hours bring.
          </p>
          <p className="md:text-lg animate-fade-out">
            In my spare time I usually read about reactive, asynchronous and
            object-oriented programming. I like to read Robert C. Martin's book
            series.
          </p>
          <p className="md:text-lg animate-fade-out">
            I am actively exploring new avenues within the tech industry and am
            eagerly open to fresh opportunities. I specialize in crafting
            dynamic web experiences using an array of cutting-edge technologies,
            including Node.js, C#, Python, and modern JavaScript libraries and
            frameworks like React.js and Next.js.
          </p>
        </div>
      </div>
    </section>
  );
}
