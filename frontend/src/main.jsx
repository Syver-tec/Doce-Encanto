import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { FavoritesProvider } from "./contexts/FavoritesContext";

import App from "./App";
import "./index.css";

import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <CartProvider>
      <App />
      <Toaster position="top-right" />
    </CartProvider>
    </FavoritesProvider>
  </React.StrictMode>,
);
