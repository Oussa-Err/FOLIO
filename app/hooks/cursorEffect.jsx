"use client";

// not using this cursor effect for now
import { useEffect } from "react";
import React from "react";
export const CursorEffect = () => {
  useEffect(() => {
    const innerCursor = document.querySelector(".inner-cursor");
    const outerCursor = document.querySelector(".outer-cursor");
    const links = document.querySelectorAll("a");
    const paragraphs = document.querySelectorAll("p");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      const x = e.clientX;
      const y = e.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;

      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    }

    paragraphs.forEach((paragraph) => {
      paragraph.addEventListener("mouseover", () => {
        innerCursor.classList.add("scale-125");
      });

      paragraph.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("scale-125");
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursor.classList.add("scale-125");
      });

      link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("scale-125");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="outer-cursor z-50 hidden md:block shadow-lg shadow-white"></div>
      <div className="inner-cursor z-50 hidden md:block"></div>
    </>
  );
};
