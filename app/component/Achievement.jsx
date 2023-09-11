export const Achievement = () => {
  return (
    <div>
      <section
        className="min-h-screen  grid col-span-1 justify-center items-center"
        id="portfolio"
      >
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[5rem] font-bold">
          Achievements
        </h1>
        <div className="flex">
          <div className="flex-1">
            <h3>Certificate XX </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ducimus in? Reprehenderit, numquam mollitia hic beatae nam quam,
              facilis velit accusamus quos consequuntur quasi eligendi
              perferendis atque minus reiciendis voluptate.
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
