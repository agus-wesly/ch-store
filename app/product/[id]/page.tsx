import Navbar from "../../Navbar";
import Image from "next/image";
import fetchers from "../../../utils";
import Recommendation from "./Recommendation";
import AddBtn from "./AddBtn";
import BackButton from "./BackButton";

interface IProps {
  params: {
    id: string;
  };
}

async function page({ params: { id } }: IProps) {
  const product: Product = await fetchers(`products/${id}`, 60);

  return (
    <div className="max-w-6xl mx-auto pb-5">
      <Navbar isShowSearch={true} />
      <div className="flex items-center p-5 pt-10 md:pt-36 space-x-5">
        <BackButton />
        <h1 className="font-bold text-black text-lg md:text-xl">
          <span className="text-primary">Product</span> Detail
        </h1>
      </div>

      <div className="m-5 mt-0 bg-white md:bg-transparent md:border-none border-2 shadow-lg border-[#623CEA] md:shadow-none border-opacity-40 flex flex-col items-start p-5 md:px-0 md:flex-row">
        <div className="relative mx-auto w-[221px] h-[269px] md:flex-1">
          <Image
            src={product.image}
            alt="product-img"
            fill={true}
            className="object-contain w-full h-full md:mix-blend-darken"
          />
        </div>
        <hr className="bg-slate-400/80 w-full h-[2px] my-5 md:hidden" />

        <div className="space-y-3 my-5 md:px-10 md:max-w-[500px] md:mx-auto flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-base text-gray-900/90">
              {product.title}
            </p>
            <p className="font-bold text-primary/90 text-xs capitalize md:hidden">
              {product.category}
            </p>
          </div>
          <h3 className="text-2xl font-extrabold ">${product.price}</h3>

          <p className="text-xs font-bold text-gray-500">
            {product.rating.count} stocks left
          </p>

          <h5 className="hidden md:flex font-semibold text-lg text-gray-900">
            Description
          </h5>
          <p className="hidden md:flex text-gray-700 text-base">
            {product.description}
          </p>
        </div>

        <div className="my-3 space-y-2 md:hidden">
          <h5 className="font-semibold text-lg text-gray-900">Description</h5>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>

        <div className="hidden md:flex flex-col my-5 space-y-5 px-5 md:px-10 flex-[0.75]">
          <AddBtn product={product} />
          <button className="text-center py-3 border-2 border-primary bg-opacity-90 font-bold text-primary text-lg cursor-pointer bg-white rounded">
            Share
          </button>
        </div>
      </div>

      <div className="flex flex-col my-5 space-y-5 px-5 md:hidden">
        <AddBtn product={product} />
        <button className="text-center py-3 border-2 border-primary bg-opacity-90 font-bold text-primary text-lg cursor-pointer bg-white rounded">
          Share
        </button>
      </div>

      {/* @ts-ignore */}
      <Recommendation category={product.category} />
    </div>
  );
}

export async function generateStaticParams() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`);
  const products: Product[] = await resp.json();

  return products.map((pro) => ({
    id: pro.id.toString(),
  }));
}

export default page;
