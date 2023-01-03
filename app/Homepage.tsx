import Image from "next/image";
function Homepage() {
  return (
    <div className="max-w-6xl mx-auto my-5 px-10">
      <div className="rounded-lg p-5 relative bg-primary-dark text-white flex flex-col gap-5 lg:min-h-[180px] lg:justify-evenly">
        <Image
          src={"/shopping.png"}
          fill={true}
          alt="shopping"
          className="object-cover mix-blend-overlay ml-32 lg:ml-64"
        />

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

// {
//     "user": {
//       "name": "Rick",
//       "email": "agustchannel@gmail.com",
//       "image": "https://lh3.googleusercontent.com/a/AEdFTp7usty-jaxj99xbvmYHKRU6DxFRGNB5RkVFggR7=s96-c"
//     },
//     "expires": "2023-01-30T13:42:44.971Z"
//   }
