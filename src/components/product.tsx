import { useBasket } from "../context/BasketContext";

export type ProductType = {
  name: string;
  price: number;
  special?: boolean;
  imageUrl: string;
  specialPrice?: number;
  specialCount?: number;
};

export const Product: React.FC<ProductType> = ({
  name,
  price,
  imageUrl,
  special,
  specialCount,
  specialPrice,
}) => {
  const { increaseQuantity } = useBasket();
  return (
    <div className="card">
      <img src={imageUrl} alt="picsum random" className="image" />
      <div className="bottom">
        <div className="productInfo">
          <div>Product {name}</div>
          <div>£{price}</div>
        </div>
        <button onClick={() => increaseQuantity(name)}>Add to basket</button>
      </div>
      {special && (
        <div className="special">
          Special deal: Buy {specialCount} for £{specialPrice}
        </div>
      )}
    </div>
  );
};
