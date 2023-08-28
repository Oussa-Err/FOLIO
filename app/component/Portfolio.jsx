import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section className="min-h-screen  grid col-span-1 justify-center items-center" id="portfolio">
      <h1>Portfolio</h1>
      <div>
        <div>
          <h3>Healthy Farm</h3>
          <p>
            This project consists of an application for tracking orders. Just
            enter the tracking code, and if valid, the information is returned
            in detail. The data comes through an API. Developed with React.js.
          </p>
          <a href="">Visit</a>
          <a href="">source</a>
        </div>
        <div>
          <Image src="/assets/healthy-farm" width={200} height={300} />
        </div>
      </div>
    </section>
  );
};
