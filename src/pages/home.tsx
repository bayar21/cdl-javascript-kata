import React from "react";
import { Shop, Basket } from "../components";
import { useBasket } from "../context/BasketContext";
import "../styles/main.scss";

const Home = () => {
  const products = [
    {
      name: "A",
      price: 50,
      special: {
        count: 3,
        price: 130,
      },
    },
    {
      name: "B",
      price: 30,
      special: {
        count: 2,
        price: 45,
      },
    },
    {
      name: "C",
      price: 20,
    },
    {
      name: "D",
      price: 15,
    },
  ];

  const { basketItems } = useBasket();
  console.log(basketItems);
  return (
    <div className="container">
      <Shop products={products} />
      <Basket items={basketItems} />
    </div>
  );
};

export default Home;
