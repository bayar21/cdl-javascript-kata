import React from "react";
import { Shop, Basket } from "../components";
import { useBasket } from "../context/BasketContext";
import "../styles/main.scss";
import { products } from "../data";

const Home = () => {
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
