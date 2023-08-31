"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollTop = () => {
  const [isTop, setIsTop] = useState(false);


  useEffect(() => {
    const handler = () => {
      window.pageYOffset > 1000 ? setIsTop(true) : setIsTop(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);


  return (
    <div>
      {isTop && (
        <a
          className="cursor-pointer fixed bottom-[50px] text-sky-800  rounded-full right-[50px]"
          href="#hero"
          onClick={() => scrollToTop()}
        >
          <FontAwesomeIcon size="3x" icon={faArrowAltCircleUp} />
        </a>
      )}
    </div>
  );
};
