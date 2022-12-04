import React from "react";
import { Shop, Basket } from "../components";
import { useBasket } from "../context/BasketContext";
import "../styles/main.scss";
import products from "../data/products.json";

const Home = () => {
  const { basketItems } = useBasket();

  return (
    <div className="container">
      <Shop products={products} />
      <Basket basketItems={basketItems} />
    </div>
  );
};

export default Home;
