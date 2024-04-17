import React from 'react'
import { useStatevalue } from '../Context&Reducer/StateContext'
function Basket({id,img,name,price,rating}) {
  const [{basket} , dispatch] = useStatevalue()
  function removefromcart() {
    dispatch({
      type:"removefromcart",
      item:{
        id:id
      }
    })
  }
  return (
    <div key={id}>
     <img src={img} alt="" width="300px" />

     <h4>{name}</h4>
     <p>$-{price}</p>
     <p>{rating}</p>
     <button onClick={removefromcart}>removefromcart</button>
    </div>
  )
}

export default Basket