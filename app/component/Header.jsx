import React from "react";

export const Header = () => {
  return (
    <div>
      <header className=" backdrop-blur-lg top-0 drop-shadow-lg inset-x-0 fixed">
        <nav className="flex justify-between p-8">
          <h1 className="text-xl text-orange-400">Err.</h1>
          <ul className="flex gap-4">
            <li> <a href="#about"> About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li> <a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
