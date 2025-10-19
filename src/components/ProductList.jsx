import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "./Header";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const products = [
    { id: 1, name: "Money Plant", price: 12, image: "/images/Money_Plant.jpg", category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 15, image: "/images/Snake_Plant.jpg", category: "Indoor" },
    { id: 3, name: "Spider Plant", price: 10, image: "/images/Spider_Plant.jpg", category: "Indoor" },
    { id: 4, name: "Aloe Vera", price: 8, image: "/images/Aloe_Vera.jpg", category: "Medicinal" },
    { id: 5, name: "Peace Lily", price: 18, image: "/images/Peace_Lily.jpg", category: "Flowering" },
    { id: 6, name: "Cactus", price: 9, image: "/images/Cactus.jpg", category: "Succulent" }
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>Our Houseplants</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {products.map((plant) => {
            const isInCart = cartItems.some((item) => item.id === plant.id);
            return (
              <div key={plant.id} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                <img src={plant.image} alt={plant.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <p style={{ fontSize: "0.9rem", color: "gray" }}>{plant.category}</p>
                <button
                  disabled={isInCart}
                  onClick={() => handleAddToCart(plant)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: isInCart ? "#ccc" : "#2ecc71",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: isInCart ? "not-allowed" : "pointer"
                  }}
                >
                  {isInCart ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
