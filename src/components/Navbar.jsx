import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStatevalue } from "../Context&Reducer/StateContext";
import { useState } from "react";
function Navbar() {
  const [{ basket }, dispatch] = useStatevalue();

  return (
    <div>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h2>ecommerce</h2>
        </Link>

        <div style={{
          padding:"10px",
          textDecoration:"none"

        }}>
          <Link to="/cart">
            <FaShoppingCart size={30} style={{color:"black"}} /> <strong>
              {basket.length}</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
