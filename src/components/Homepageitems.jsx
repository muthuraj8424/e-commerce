import React, { useState } from "react";

import { useStatevalue } from "../Context&Reducer/StateContext";

function Homepageitems({ id, name, img, price, rating }) {
  const [state, dispatch] = useStatevalue();

  function addtocart() {
    dispatch({
      type: "addtocart",
      item: {
        id: id,
        name: name,
        img: img,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt="product image" width="300px" />
      <p>{rating}</p>
      <p>{price}</p>
      <button onClick={addtocart}>add to cart</button>
    </div>
  );
}

export default Homepageitems;
