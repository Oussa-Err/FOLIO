"use client";
import GitHubCalendar from "react-github-calendar";
import AnimatedSections from "../hooks/AnimatedSections";

export default function Github() {
  const { observerRef, myElementVisible } = AnimatedSections();

  return (
    <section className="min-h-screen flex flex-col justify-around items-center">
      <h1
        ref={observerRef}
        className={`text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold ${
          myElementVisible && "animate-scrollTop"
        }`}
      >
        Days I <strong className="text-amber-600 ">Code</strong>
      </h1>
      <GitHubCalendar
        username="oussa-err"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        hideColorLegend
      />
    </section>
  );
}
