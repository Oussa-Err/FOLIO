"use client"
import { useEffect } from 'react';

const AnimatedSections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-fade-slide-down');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-slide-down');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return null;
};

export default AnimatedSections;