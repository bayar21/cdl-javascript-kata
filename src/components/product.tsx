import { useBasket } from "../context/BasketContext";

export type ProductType = {
  name: string;
  price: number;
};

export const Product: React.FC<ProductType> = ({ name, price }) => {
  const { increaseQuantity, decreaseQuantity } = useBasket();
  return (
    <div className="card">
      <div>
        <img
          src="https://picsum.photos/200/100"
          alt="picsum random"
          className="image"
        />
      </div>
      <div className="bottom">
        <div>Product name: {name}</div>
        <div>Price: {price}</div>
        <button onClick={() => increaseQuantity(name)}>Add</button>
        <button onClick={() => decreaseQuantity(name)}>Remove</button>
      </div>
    </div>
  );
};
