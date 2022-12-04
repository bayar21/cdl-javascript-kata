import { BasketItemType } from "../context/BasketContext";
import { BasketItem, Checkout } from "./"

type BasketProps = {
  items: BasketItemType[];
};

export const Basket = ({ items }: BasketProps) => {
  return (
    <div className="basketContainer">
      <div className="basket">
        <div>Shopping basket</div>
        <div className="items">
          {items.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="checkout">
        <Checkout />
      </div>
    </div>
  );
};
