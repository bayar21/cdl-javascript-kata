import { BasketItem } from "../context/BasketContext";

type BasketProps = {
  items: BasketItem[];
};

export const Basket = ({ items }: BasketProps) => {
  return (
    <div className="basket">
      <div>Your basket</div>
      <div>
        {items
          .map((item) => {
            return (
              <div key={item.id}>
                {item.id} , {item.quantity}{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
};
