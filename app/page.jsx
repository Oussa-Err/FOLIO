import { About } from "./component/About";
import { Contact } from "./component/Contact";
import Github from "./component/GithubCal";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { Portfolio } from "./component/Portfolio";
import { ScrollTop } from "./hooks/ScrollTop";

export default function Home() {
  return (
    <main className="px-8 md:px-24">
      <ScrollTop />
      <Header />
      
        <Hero />
        <About />
        <Portfolio />
        <Github />
        <Contact />
    </main>
  );
}
