import React, { useState } from 'react'
import "./Cart.css"
import { useCartContext } from '../../context/cartcontext';
const CartItem = (props) => {
    const {removeItem,setDecrease,setIncrease}=useCartContext();
    

  return <div className="item">
         <img src={props.imgurl} alt="" />
         <h5>{props.title}</h5>
         <div className="count">
          <button onClick={()=>setDecrease(props.id)}>-</button>
          <p>{props.amount}</p>
          <button onClick={()=>setIncrease(props.id)}>+</button>
         </div>
         <button id='del' onClick={()=>removeItem(props.id)}>Delete</button>
         <h4>${props.price*props.amount}</h4>
    </div>
  
}

export default CartItem