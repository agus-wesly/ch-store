import Navbar from "../../Navbar";
import fetchers from "../../../utils";
import Recommendation from "./Recommendation";
import AddBtn from "./AddBtn";
import BackButton from "./BackButton";
import ProductDetail from "./ProductDetail";

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

      <ProductDetail product={product} />

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
