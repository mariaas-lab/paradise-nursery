import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>WelCome To Paradise Nursery</h1>
    
<p>
At Paradise Nursery, we believe that every home deserves a touch of nature. We specialize in a diverse selection of house plants that not only beautify your space but also improve air quality and enhance your well-being. Our commitment to quality ensures that each plant is carefully nurtured and ready to thrive in your home.

Explore our collection of air-purifying plants, aromatic herbs, and unique varieties that cater to every plant lover's needs. Whether you're a seasoned gardener or just starting your green journey, we have the perfect plants for you.

Get Started and discover the joy of bringing nature indoors!

</p>
        <button onClick={() => navigate("/products")}>Get Started</button>
      </div>
    </div>
  );
}
