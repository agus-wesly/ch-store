import fetchers from "../utils";
import ProductContainer from "./ProductContainer";

async function ForYou() {
  const recommendProduct: Product[] = await fetchers("products?limit=10");

  return (
    <div className="max-w-6xl mx-auto w-full px-5 py-5 md:p-10 space-y-5">
      <h1 className="text-xl text-black/95 font-bold ">For You</h1>
      <ProductContainer recommendProduct={recommendProduct} />
    </div>
  );
}

export default ForYou;
