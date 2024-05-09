"use client";
import { About } from "./component/About";
import Achievement from "./component/Achievement";
import { Contact } from "./component/Contact";
import Github from "./component/GithubCal";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { Portfolio } from "./component/Portfolio";
import { ScrollTop } from "./hooks/ScrollTop";
import Loading from "./Loading";
import { useEffect, useState } from "react";

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
