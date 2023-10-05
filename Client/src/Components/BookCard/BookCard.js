import React from 'react'
import "./BookCard.css";

const BookCard = (props) => {
    
  return (
    <div className="card">
    <img src={props.imgurl} alt="Book 1"/>
    <h5>{props.title}</h5>
    <p className="price">{props.price}</p>
    <div className="rating">⭐⭐⭐⭐</div>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  )
}

export default BookCard

