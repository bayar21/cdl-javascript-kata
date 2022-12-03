import React from "react";
import ReactDOM from "react-dom/client";
import { BasketProvider } from "./context/BasketContext";
import Home from "./pages/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BasketProvider>
    <Home />
  </BasketProvider>
);
