import { BasketItemType } from "../context/BasketContext";
import products from "../data/products.json";

export const CheckoutItem = ({ id, quantity }: BasketItemType) => {
  const item = products.find((item) => item.name === id);
  if (item == null) return null;

  return (
    <div className="checkoutItem">
      <div>
        Product {id}{" "}
        <div>
          <span className="subtitle">
            {`£${(item.price / 100).toFixed(2)} x ${quantity}`}
          </span>
        </div>
      </div>

      {item.specialCount && quantity >= item.specialCount ? (
        <>
          <div>
            <div className="strike">
              £{((item.price * quantity) / 100).toFixed(2)}
            </div>
            <div>
              £
              {(
                (item.specialPrice * Math.floor(quantity / item.specialCount) +
                  item.price * (quantity % item.specialCount)) /
                100
              ).toFixed(2)}
            </div>
          </div>
        </>
      ) : (
        <div>£{((item.price * quantity) / 100).toFixed(2)} </div>
      )}
    </div>
  );
};
