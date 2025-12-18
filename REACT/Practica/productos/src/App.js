import React from "react";
import ProductList from "./components/ProductList";
import { catalog } from "./data/catalog";
export default function App() {
  return (
    <div className="app">
      <ProductList products={catalog} />
    </div>
  );
}
