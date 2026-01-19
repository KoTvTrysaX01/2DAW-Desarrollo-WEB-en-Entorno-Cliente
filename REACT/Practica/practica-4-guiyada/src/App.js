//src/App.js
//Componentes
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
//Datos
import { catalog } from "./data/catalog";
export default function App() {
  const [products, setProducts] = useState(catalog);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const filteredProducts = products.filter((p) => {
    const text = query.toLowerCase();
    return (
      p.nombre.toLowerCase().includes(text) ||
      p.id.toLowerCase().includes(text) ||
      String(p.precio).includes(text)
    );
  });
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Cart items={cartItems} />
      </div>
      <SearchBar
        query={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
      />
      <ProductForm onAdd={addProduct} />
      <ProductList products={filteredProducts} onAdd={addToCart} />
      <Footer />
    </>
  );
}
