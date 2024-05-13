import dynamic from "next/dynamic";
import { Suspense } from "react";

const About = dynamic(() => import("./component/About"));
const Achievement = dynamic(() => import("./component/Achievement"));
const Contact = dynamic(() => import("./component/Contact"));
const Github = dynamic(() => import("./component/GithubCal"));
const Header = dynamic(() => import("./component/Header"));
const Hero = dynamic(() => import("./component/Hero"));
const Portfolio = dynamic(() => import("./component/Portfolio"));
const ScrollTop = dynamic(() => import("./hooks/ScrollTop"));
const Loading = dynamic(() => import("./loading"));

console.log(`

 _______  _______  _______    
(  ____ \(  ____ )(  ____ )   
| (    \/| (    )|| (    )|   
| (__    | (____)|| (____)|   
|  __)   |     __)|     __)   
| (      | (\ (   | (\ (      
| (____/\| ) \ \__| ) \ \__ _ 
(_______/|/   \__/|/   \__/(_)
                              

`);

export default function Home() {
  return (
    <main className="px-8 md:px-24">
      <Suspense fallback={<Loading />}>
        <Header />
        <ScrollTop />
        <Hero />
        <About />
        <Portfolio />
        <Achievement />
        <Github />
        <Contact />
      </Suspense>
    </main>
  );
}
