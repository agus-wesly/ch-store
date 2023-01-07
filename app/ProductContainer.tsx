import Product from "../components/Product";

interface IProps {
  recommendProduct: Product[];
}

function ProductContainer({ recommendProduct }: IProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {recommendProduct.map((product, i) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductContainer;
