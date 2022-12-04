import { useBasket } from "../context/BasketContext";

export type ProductType = {
  name: string;
  price: number;
  imageUrl: string;
  specialPrice?: number;
  specialCount?: number;
};

export const Product: React.FC<ProductType> = ({
  name,
  price,
  imageUrl,
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
          <div>£{price / 100}</div>
        </div>
        <button onClick={() => increaseQuantity(name)}>Add to basket</button>
      </div>
      {specialPrice && (
        <div className="special">
          Special deal: Buy {specialCount} for £{specialPrice / 100}
        </div>
      )}
    </div>
  );
};
