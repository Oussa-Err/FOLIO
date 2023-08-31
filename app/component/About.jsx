import React from "react";

export const About = () => {
  return (
    <section
      className="min-h-screen max-w-full pt-24 flex justify-center animate-fade-slide-down"
      id="about"
    >
      <div className="flex flex-col gap-4 lg:max-w-5xl sm:gap-8">
        <h1 className="text-[3rem] block relative pb-4 sm:text-[4rem] lg:text-[5rem] font-bold animate-fade-slide-down after:content-[''] after:w-2/5 after:h-8 after:bg-sky-800 after:absolute after:left-0 after:top-1/2 after:z-[-1] z-10 after:animate-blue-block-slide">
          Know Who I'M
        </h1>
        <p className="md:text-xl">
          My name is Oussama, I’m from Morocco and I’m 22 years old.
        </p>
        <p className="md:text-lg">
          I describe myself as a passionate developer who loves coding, open
          source, and the web platform.
        </p>
        <p className="md:text-lg">
          Aside from my Freelance, I like to create and contribute to open
          source projects. That helps me to learn a ton of new stuff, grow as a
          developer and support other open source projects.
        </p>
        <p className="md:text-lg">
          My passion for technology was born when I was 5 years old, when I
          first used a computer.
        </p>
        <p className="md:text-lg">
          I started as a Front-end Developer on 3/01/2023. Since then I have
          been dedicating about 12 hours a day to studies.
        </p>
        <p className="md:text-lg">
          I have a huge passion for helping people who are just starting. Codes,
          movies, video games, music, podcast and studies are subjects that
          interest me.
        </p>
        <p className="md:text-lg">
          I see that I am on the right path because I love helping people who
          are starting out, just as I was a beginner. Furthermore, I see the
          results that the dedicated hours bring.
        </p>
        <p className="md:text-lg">
          In my spare time I usually read about reactive, asynchronous and
          object-oriented programming. I like to read Robert C. Martin's book
          series.
        </p>
        <p className="md:text-lg">
          I am actively exploring new avenues within the tech industry and am
          eagerly open to fresh opportunities. I specialize in crafting dynamic
          web experiences using an array of cutting-edge technologies including
          Node.js, GraphQL and Modern Javascript Library and Frameworks like
          React.js and Next.js
        </p>
      </div>
    </section>
  );
};
