import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#2ecc71",
        color: "white"
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white"
        }}
      >
        <h2>Paradise Nursery</h2>
      </Link>

      <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <span>  🛒Cart</span> <span>({totalItems})</span>
        </Link>
      </nav>
    </header>
  );
}
