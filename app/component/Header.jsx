import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="backdrop-blur-lg top-0 drop-shadow-lg inset-x-0 fixed">
        <nav className="flex justify-between pt-4 sm:pt-8 pb-4 px-12 md:px-20">
          <Link
          href={'/'}
          >
            <h1 className="text-orange-400 font-serif text-[2rem] md:text-[3rem]">Err.</h1>
          </Link>
          <ul className="flex gap-8 animate-fade-slide-down">
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
        </nav>
      </header>
    </div>
  );
};
