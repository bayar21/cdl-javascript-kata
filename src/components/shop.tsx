import { ProductType } from "./product";
import { Product } from "./product";

type ProductsList = {
  products: ProductType[];
}

export const Shop: React.FC<ProductsList> = ({ products }) => {
  return (
    <div className="shopContainer">
      {products.map((product) => (
        <Product {...product} key={product.name}/>
      ))}
    </div>
  );
};
