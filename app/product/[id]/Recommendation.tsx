import fetchers from "../../../utils";
import Product from "../../../components/Product";

interface IProps {
  category: string;
}

async function Recommendation({ category }: IProps) {
  const recommendProduct: Product[] = await fetchers(
    `products/category/${category}`
  );

  return (
    <div className="max-w-6xl mx-auto w-full px-5 py-5 md:p-10 space-y-5">
      <h1 className="text-xl text-black/95 font-bold ">You might also like</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {recommendProduct.map((product, i) => (
          <Product key={product.id} product={product} idx={i} />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
