import { BasketItemType } from "../context/BasketContext";
import { ProductType } from "../components";

export const getTotal = (
  basketItems: BasketItemType[],
  products: ProductType[]
) => {
  return (
    basketItems.reduce((total, basketItem) => {
      const item = products.find((item) => item.name === basketItem.id);
      if (item == null) return 0;
      if (item.specialPrice && item.specialCount) {
        return (
          total +
          item.specialPrice *
            Math.floor(basketItem.quantity / item.specialCount) +
          item.price * (basketItem.quantity % item.specialCount)
        );
      } else {
        return total + (item?.price || 0) * basketItem.quantity;
      }
    }, 0) / 100
  ).toFixed(2);
};
