"use client";
import Image from "next/image";
import projects from "../../Data/projects";
import AnimatedSections from "../hooks/AnimatedSections";
import { useState } from "react";

export default function Portfolio() {
  const { observerRef, myElementVisible } = AnimatedSections();
  const [type, setType] = useState("");
  const [filter, setFilter] = useState(false);

  return (
    <section
      className="min-h-screen w-full md:w-4/5 m-auto gap-4 mt-24"
      id="portfolio"
      ref={observerRef}
    >
      <h1
        ref={observerRef}
        className={`text-[3rem] inline-block relative pb-8 sm:text-[4rem] lg:text-[5rem] font-bold after:content-[''] after:w-3/5 after:h-4 sm:after:h-8 after:bg-sky-800 after:absolute after:left-0 after:z-[-1] z-10 after:top-2/4 ${
          myElementVisible
            ? "md:after:top-1/2  after:animate-blue-block-slide animate-fade-slide-down"
            : "sm:after:top-1/2"
        }`}
      >
        Portfolio
      </h1>
      <div className="w-full flex flex-col items-end relative top-[-2rem] sm:top-[-5rem]">
        <button
          type="button"
          className="text-center text-white inline-flex items-center tracking-wider"
          onClick={() => setFilter(!filter)}
        >
          Filter
          <DownArrow />
        </button>
        <div
          className={`z-10 relative top-0 ${
            filter ? "absolute inset-0" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
        >
          <ul className="py-1 text-sm text-gray-700">
            {stacks.map((el, index) => (
              <li key={index}>
                <a
                  href="#portfolio"
                  onClick={() => [setFilter(false), setType(el.label)]}
                  className="block px-4 py-2 hover:bg-[#fb923c]"
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid col-span-1 justify-center items-center gap-14">
        {projects
          .filter((el) => (type ? el.type === type : el))
          .map((el, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row gap-4 w-full"
            >
              <div className="flex-1 flex justify-center flex-col gap-8">
                <h3 className="font-mono text-3xl text-center lg:text-left">
                  {el.title}
                </h3>
                <p className="text-center text-lg sm:text-xl md:text-left ">
                  {el.description}
                </p>
                <div className="w-full flex justify-between">
                  {el && el.live_url.length > 1 ? (
                    <a
                      href={el.live_url}
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Visit
                      <span className="text-xl font-extrabold">&rarr;</span>
                    </a>
                  ) : (
                    <p className="text-lg font-semibold hover:underline" title="no live url for this project">
                      Visit
                      <span className="text-xl font-extrabold">&rarr;</span>
                    </p>
                  )}
                  <a
                    href={el.source_url}
                    target="_blank"
                    className="text-lg font-semibold hover:underline"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <Image src={el.image} alt={el.alt} width={700} height={300} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

const stacks = [
  {
    name: "All",
    label: "",
  },
  {
    name: "Full stack",
    label: "fullstack",
  },
  {
    name: "Frontend",
    label: "frontend",
  },
  {
    name: "JAM stack",
    label: "jamstack",
  },
  {
    name: "Desktop",
    label: "desktop",
  },
];

const DownArrow = () => (
  <svg
    className="w-2.5 h-2.5 ms-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);
