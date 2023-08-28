import React from "react";

export const Achievement = () => {
  return (
    <div>
      <section
        className="min-h-screen  grid col-span-1 justify-center items-center"
        id="portfolio"
      >
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[5rem] font-bold">Achievements</h1>
        <div className="flex">
          <div className="flex-1">
            <h3>Certificate XX </h3>
            <p>
              This project consists of an application for tracking orders. Just
              enter the tracking code, and if valid, the information is returned
              in detail. The data comes through an API. Developed with React.js.
            </p>
            <div className="w-full flex justify-between">
              <a href="">Visit</a>
              <a href="">source</a>
            </div>
          </div>
          <div className="flex-1">
            <Image src="/assets/certificate-1" width={300} height={300} />
          </div>
        </div>
      </section>
    </div>
  );
};
