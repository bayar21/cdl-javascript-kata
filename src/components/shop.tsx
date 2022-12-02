import { ProductType } from "./product";

interface ProductsList {
  products: ProductType[]
}

export const Shop: React.FC<ProductsList> = ({products}) => {

  return (
    <div>
      {products.map((product) => (
        <div>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};
