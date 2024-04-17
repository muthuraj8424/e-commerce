import React, { useContext } from "react";
import { useStatevalue } from "../Context&Reducer/StateContext";
import Basket from "./Basket";
import { total } from "../Context&Reducer/reducer";
function Cartpage() {
   const[{basket},dispatch] = useStatevalue()
  return (
    <div style={{}}>
      <h2 style={{textAlign:"center"}}>Your cart items</h2>
      <h3 style={{textAlign:"center"}}> subtotal-{basket.length} =  $- {total(basket)}</h3>
       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",margin:"100px"}}>
        {basket.map((item)=>(
          <Basket id={item.id} name={item.name} price={item.price} img={item.img} rating={item.rating}/>
        ))}
       </div>
    </div>
  );
}

export default Cartpage;
