import { ProductType } from "./product";
import { Product } from "./product";

type ProductsList = {
  products: ProductType[];
}

export const Shop: React.FC<ProductsList> = ({ products }) => {
  return (
    <div className="shop">
      {products.map((product) => (
        <Product name={product.name} price={product.price } key={product.name}/>
      ))}
    </div>
  );
};
