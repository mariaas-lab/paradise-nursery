import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

export default function App() {
  return (
       <Router basename="/paradise-nursery">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
