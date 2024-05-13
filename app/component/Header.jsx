"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [toggleMenu, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

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
          <ul className="hidden text-xl md:flex items-center gap-8">
            <li className="animate-navLinks">
              <a href="/#about" className=" hover:pb-4">
                About
              </a>
            </li>
            <li className="animate-navLinks-A">
              <a
                href="/#portfolio"
                className="transition-all duration-500 ease-in-out"
              >
                Portfolio
              </a>
            </li>
            <li className="animate-navLinks-B">
              <a
                href="/#achievements"
                className="transition-all duration-500 ease-in-out"
              >
                Achievements
              </a>
            </li>
            <li className="animate-navLinks-C">
              <a
                href="/#contact"
                className="transition-all duration-500 ease-in-out"
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
              <div
                className={`bg-white text-black absolute inset-0 z-40 h-screen animate-bg-toggle`}
              >
                <ul
                  className={`h-full flex flex-col text-2xl items-center justify-center gap-8 animate-fade-out  transition ease-in-out  duration-300 group disabled:fade-out `}
                >
                  <li className="animate-navLinks-toggle">
                    <a
                      href="/#about"
                      onClick={() => {
                        setToggle(!toggleMenu);
                        checkScroll();
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="animate-navLinks-toggle-A">
                    <a
                      href="/#portfolio"
                      onClick={() => {
                        setToggle(!toggleMenu);
                        checkScroll();
                      }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="animate-navLinks-toggle-B">
                    <a
                      href="/#achievements"
                      onClick={() => {
                        setToggle(!toggleMenu);
                        checkScroll();
                      }}
                    >
                      Achievements
                    </a>
                  </li>
                  <li className="animate-navLinks-toggle-C">
                    <a
                      href="/#contact"
                      onClick={() => {
                        setToggle(!toggleMenu);
                        checkScroll();
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
