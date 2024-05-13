"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const About = dynamic(() => import("./component/About"));
const Achievement = dynamic(() => import("./component/Achievement"));
const Contact = dynamic(() => import("./component/Contact"));
const Github = dynamic(() => import("./component/GithubCal"));
const Header = dynamic(() => import("./component/Header"));
const Hero = dynamic(() => import("./component/Hero"));
const Portfolio = dynamic(() => import("./component/Portfolio"));
const ScrollTop = dynamic(() => import("./hooks/ScrollTop"));
const Loading = dynamic(() => import("./Loading"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="px-8 md:px-24">
      {loading ? (
        loading && (
          <div className="h-[calc(100vh-200px)]  flex items-center justify-center">
            <Loading />
          </div>
        )
      ) : (
        <>
          <Header />
          <ScrollTop />
          <Hero />
          <About />
          <Portfolio />
          <Achievement />
          <Github />
          <Contact />
        </>
      )}
    </main>
  );
}
