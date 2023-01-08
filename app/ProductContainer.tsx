import Product from "../components/Product";

interface IProps {
  recommendProduct: Product[] | undefined;
}

function ProductContainer({ recommendProduct }: IProps) {
  if (!recommendProduct) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {recommendProduct.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductContainer;
