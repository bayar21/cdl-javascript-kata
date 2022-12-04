import { BasketItemType } from "../context/BasketContext";
import { BasketItem, CheckoutItem } from "./";
import products from "../data/products.json";
import { getTotal } from "../utils";

type BasketProps = {
  basketItems: BasketItemType[];
};

export const Basket = ({ basketItems }: BasketProps) => {
  return (
    <div className="basketContainer">
      <div className="basket">
        <div>Shopping basket</div>
        <div className="items">
          {basketItems.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="checkout">
        <h4 className="title">Checkout</h4>
        {basketItems.map((item) => {
          return <CheckoutItem key={item.id} {...item} />;
        })}
        {basketItems.length > 0 && <div className="divider"></div>}
        <div className="totalSection">
          <h4 className="total">Total</h4>
          <h4>£{getTotal(basketItems, products)}</h4>
        </div>
      </div>
    </div>
  );
};
