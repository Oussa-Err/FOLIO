"use client";
import { useEffect } from "react";
import React from "react";

export const CursorEffect = () => {
  useEffect(() => {
    const innerCursor = document.querySelector(".inner-cursor");
    const outerCursor = document.querySelector(".outer-cursor");
    const links = document.querySelectorAll("a");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      const x = e.clientX;
      const y = e.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;

      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    }

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursor.classList.add("scale-y-110");
      });

      link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("scale-y-110");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);      
    };
  }, []);

  return (
    <>
      <div className={`inner-cursor z-50`}></div>
      <div className={`outer-cursor z-50`}></div>
    </>
  );
};
