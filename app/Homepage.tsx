import Image from "next/image";
function Homepage() {
  return (
    <div className="max-w-6xl mx-auto my-5 md:mt-32 px-5 md:px-10">
      <div className="rounded-lg p-5 bg-primary-dark text-white flex flex-col gap-5 md:max-h-[242px] overflow-hidden relative lg:justify-evenly lg:py-7">
        <div className="absolute w-[292px] h-[147px] md:w-[788px] md:h-[500px] -right-10 top-0 md:right-0 md:-top-12">
          <Image
            src={"/shopping.png"}
            width={292}
            height={147}
            alt="shopping"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <h1 className="text-lg font-bold max-w-[280px] lg:max-w-[380px] lg:text-2xl">
          Discover the best deals in our product
        </h1>

        <div className="flex items-center space-x-5 lg:text-xl cursor-pointer">
          <p>Shop Now</p>
          <span>&#8594;</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
