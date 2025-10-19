import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Header />
      <div style={{ padding: "30px" }}>
        <h2>Your Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <p>Total Plants: {totalItems}</p>
            <p>Total Cost: ${totalPrice}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "10px"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div style={{ flex: 1, marginLeft: "15px" }}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      style={{ padding: "6px 12px", margin: "0 4px" }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      style={{ padding: "6px 12px", margin: "0 4px" }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
              <button
                onClick={() => navigate("/products")}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Continue Shopping
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
