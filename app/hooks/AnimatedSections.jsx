"use client";
import { useEffect, useRef, useState } from "react";

const AnimatedSections = () => {
  const observerRef = useRef();
  const [myElementVisible, setMyElementVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementVisible(entry.isIntersecting);
    });
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { observerRef, myElementVisible };
};

export default AnimatedSections;
