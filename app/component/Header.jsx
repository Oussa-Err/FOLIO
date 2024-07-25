"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [toggleMenu, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const checkScroll = () => {
    setScroll(!scroll);
    document.body.style.overflow = !scroll ? "hidden" : "";
  };

  return (
    <header className="backdrop-blur-lg z-40 top-0 drop-shadow-lg inset-x-0 fixed">
      <nav className="flex justify-between pt-2 sm:pt-1 pb-1 px-12 md:px-20">
        <Link href="/">
          <h1 className="text-orange-400 relative z-50 font-serif text-[2rem] md:text-[3rem]">
            Err.
          </h1>
        </Link>
        <ul className="hidden text-xl md:flex items-center gap-8">
          {sections.map((el, index) => (
            <li key={index} className={el.animation}>
              <a href={el.href}>{el.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center md:hidden">
          {toggleMenu ? (
            <FontAwesomeIcon
              icon={faClose}
              size="2x"
              className="relative z-50 text-black cursor-pointer animate-rotated"
              onClick={() => {
                setToggle(false);
                checkScroll();
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="cursor-pointer open:animate-rotated"
              onClick={() => {
                setToggle(true);
                checkScroll();
              }}
            />
          )}
          {toggleMenu && (
            <div className="bg-white text-black absolute inset-0 z-40 h-screen animate-bg-toggle">
              <ul className="h-full flex flex-col text-2xl items-center justify-center gap-8 animate-fade-out  transition ease-in-out  duration-300 group disabled:fade-out">
                {sections.map((el, index) => (
                  <li className={el.animtionOnToggle} key={index}>
                    <a
                      href={el.href}
                      onClick={() => {
                        setToggle(!toggleMenu);
                        checkScroll();
                      }}
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

const sections = [
  {
    name: "About",
    href: "#about",
    animation: "animate-navLinks",
    animtionOnToggle: "animate-navLinks-toggle",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
    animation: "animate-navLinks-A",
    animtionOnToggle: "animate-navLinks-toggle-A",
  },
  {
    name: "Achievement",
    href: "#achievements",
    animation: "animate-navLinks-B",
    animtionOnToggle: "animate-navLinks-toggle-B",
  },
  {
    name: "Contact",
    href: "#contact",
    animation: "animate-navLinks-C",
    animtionOnToggle: "animate-navLinks-toggle-C",
  },
];
