import { BasketItemType, useBasket } from "../context/BasketContext";
import "../styles/basket.scss";
import { products } from "../data";

export const BasketItem = ({ id, quantity }: BasketItemType) => {
  const { increaseQuantity, decreaseQuantity, removeFromBasket } = useBasket();

  const item = products.find((item) => item.name === id);
  if (item == null) return null;

  return (
    <div className="basketItem">
      <div className="left">
        <img src={item.imageUrl} alt="product" className="basketItemImage" />
        <div>Product {id}</div>
      </div>
      <div className="right">
        <div>£{item.price} </div>
        <div className="count">
          <button
            className="circularButton"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <div className="basketItemText">{quantity} </div>
          <button
            className="circularButton"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </div>
        <div onClick={() => removeFromBasket(id)}>
          <img src="/assets/trash.svg" alt="delete" className="removeButton" />
        </div>
      </div>
    </div>
  );
};
