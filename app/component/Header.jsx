"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [toggleMenu, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [fadeProp, setFadeProp] = useState(false);
  

  const checkScroll = () => {
    setScroll(!scroll);

    if (!scroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div>
      <header className="backdrop-blur-lg z-40 top-0 drop-shadow-lg inset-x-0 fixed">
        <nav className="flex justify-between pt-2 sm:pt-1 pb-1 px-12 md:px-20">
          <Link href={"/"}>
            <h1 className="text-orange-400 relative z-50 font-serif text-[2rem] md:text-[3rem]">
              Err.
            </h1>
          </Link>
          <ul className="hidden text-xl md:flex items-center gap-8  ">
            <li className="animate-navLinks">
              <a
                href="#about"
                className="transition-all duration-500 ease-in-out hover:text-sky-400"
              >
                About
              </a>
            </li>
            <li className="animate-navLinks-A">
              <a
                href="#portfolio"
                className="transition-all duration-500 ease-in-out hover:text-sky-400"
              >
                Portfolio
              </a>
            </li>
            <li className="animate-navLinks-B">
              <a
                href="#blog"
                className="transition-all duration-500 ease-in-out hover:text-sky-400"
              >
                Blog
              </a>
            </li>
            <li className="animate-navLinks-C">
              <a
                href="#contact"
                className="transition-all duration-500 ease-in-out hover:text-sky-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center md:hidden">
            {toggleMenu ? (
              <FontAwesomeIcon
                icon={faClose}
                size="2x"
                className="relative z-50 text-black cursor-pointer prev"
                onClick={() => {
                  setToggle(false);
                  checkScroll();
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="cursor-pointer"
                onClick={() => {
                  setToggle(true);
                  checkScroll();
                }}
              />
            )}
            {toggleMenu && (
              <div className={`bg-white text-black absolute inset-0 z-40 h-screen animate-bg-toggle`}>
                  <ul
                    className={`h-full flex flex-col text-2xl items-center justify-center gap-8 after:animate-fade-out  duration-300 `}
                    onClick={() => {
                      setToggle(!toggleMenu);
                      checkScroll();
                    }}
                  >
                    <li className="animate-navLinks-toggle">
                      <a href="#about">About</a>
                    </li>
                    <li className="animate-navLinks-toggle-A">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="animate-navLinks-toggle-B">
                      <a href="#blog">Blog</a>
                    </li>
                    <li className="animate-navLinks-toggle-C">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};
