"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [toggleMenu, setToggle] = useState(false);
  return (
    <div>
      <header className="backdrop-blur-lg top-0 drop-shadow-lg inset-x-0 fixed">
        <nav className="flex justify-between pt-4 sm:pt-8 pb-4 px-12 md:px-20">
          <Link href={"/"}>
            <h1 className="text-orange-400 font-serif text-[2rem] md:text-[3rem]">
              Err.
            </h1>
          </Link>
          <ul className="hidden text-xl md:flex items-center gap-8 animate-fade-slide-down">
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex items-center md:hidden">
            {toggleMenu ? (
              <FontAwesomeIcon
                icon={faClose}
                size='2x'
                className="relative z-50 cursor-pointer"
                onClick={() => setToggle(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size='xl'
                className="cursor-pointer"
                onClick={() => setToggle(true)}
              />
            )}
            {toggleMenu && (
              <ul className="absolute inset-0 z-40 h-screen backdrop-blur-xl flex flex-col text-2xl items-center justify-center gap-8 animate-fade-slide-down">
                <li>
                  <a href="#about"> About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};
