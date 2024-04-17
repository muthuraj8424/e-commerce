import React from 'react'
import { useStatevalue } from '../Context&Reducer/StateContext'

function Button({id , name,img,price,rating}) {
    const[state , dispatch] = useStatevalue()

    function addtocart() {
        dispatch({
            type: 'addtocart',
            item:{
                id:id,
                name:name,
                img:img,
                price:price,
                rating:rating
            }
        })
    }
  return (
    <div >
        <button onClick={addtocart}>add to cart</button>
    </div>
  )
}

export default Button