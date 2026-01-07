
import React, { useContext } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogProvider from './data/catalog';

export default function App() {
  return (
    <div className="app">
      <Header />
      <CatalogProvider>
        <ProductList />
      </CatalogProvider>
      <Footer />
    </div>
  );
}
