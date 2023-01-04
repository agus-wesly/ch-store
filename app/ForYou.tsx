import Product from "../components/Product";
import fetchers from "../utils";

async function ForYou() {
  const recommendProduct: Product[] = await fetchers("products?limit=10");

  return (
    <div className="max-w-6xl mx-auto w-full px-5 py-5 md:p-10 space-y-5">
      <h1 className="text-xl text-black/95 font-bold ">For You</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {recommendProduct.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ForYou;
