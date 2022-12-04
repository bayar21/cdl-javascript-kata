import { createContext, ReactNode, useContext, useState } from "react";

type BasketProviderProps = {
  children: ReactNode;
};

export type BasketItemType = {
  id: string;
  quantity: number;
};

type BasketContextType = {
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  basketItems: BasketItemType[];
  removeFromBasket: (id: string) => void;
};

const BasketContext = createContext({} as BasketContextType);

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);

  const increaseQuantity = (id: string) => {
    setBasketItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === undefined) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id: string) => {
    setBasketItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromBasket = (id: string) => {
    setBasketItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <BasketContext.Provider
      value={{
        increaseQuantity,
        decreaseQuantity,
        basketItems,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
