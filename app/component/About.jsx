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
          className={`flex flex-col gap-4 lg:max-w-6xl sm:gap-8 text-slate-200 ${
            myElementVisible && "animate-fade-out"
          }`}
        >
          <p className="md:text-xl animate-fade-out">
            My name is Oussama, I’m from Morocco and I’m&nbsp;
            {new Date().getFullYear() - 2001} years old.
          </p>
          <p className="md:text-lg animate-fade-out">
            I’ve been in love with technology since I first used a computer at
            age 5. Starting as a Front-end Developer in 2023, I’ve dedicated
            around 10 hours a day to studying and refining my skills.
          </p>
          <p className="md:text-lg animate-fade-out">
            I enjoy working on <strong>web</strong>, <strong>mobile</strong> and
            &nbsp;<strong>desktop</strong>&nbsp;applications, contributing to
            &nbsp;<strong>open source projects</strong>, and&nbsp;
            <strong>helping newcomers</strong>&nbsp;in the field.
          </p>
          <p className="md:text-lg animate-fade-out">
            I specialize in technologies like <strong>PHP</strong>
            &nbsp;with&nbsp;<strong>Laravel</strong>,&nbsp;
            <strong>Node.js</strong>
            &nbsp;with&nbsp;<strong>Express.js</strong>, and front-end
            frameworks like&nbsp;<strong>React.js</strong>&nbsp;and&nbsp;
            <strong>Next.js</strong>, along with databases such as &nbsp;
            <strong>MySQL</strong>,&nbsp;<strong>SQL Server</strong>, and &nbsp;
            <strong>MongoDB</strong>. Additionally, I have experience in &nbsp;
            <strong>Python</strong>&nbsp;and&nbsp;<strong>C#</strong>
            &nbsp;development.
          </p>
          <p className="md:text-lg animate-fade-out">
            Codes, series, video games, music, skateboarding and studies are
            subjects that interest me.
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
        </div>
      </div>
    </section>
  );
}
