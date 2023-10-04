import React from 'react'
import "./BookCard.css";

const BookCard = () => {
    
  return (
    <div class="card">
     <img src="https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg" alt="Book 1"/>
    <div class="book-details">
        <div class="book-title">Book Title 1</div>
        <div class="author-name">Author Name 1</div>
        <div class="price">$19.99</div>
    </div>
    <button class="add-to-cart">Add to Cart</button>
</div>
  )
}

export default BookCard

