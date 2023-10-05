import React from 'react'
import "./Cart.css"

const Cart = () => {
  return (
    <div class="cart-container">
        <h1>🛒</h1> 
    <div class="cart-item">
      <img src="https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg" alt="Book 1" class="product-image"/>
      <div class="product-details">
        <p class="product-name">Book 1</p>
        <p class="price">$19.99</p>
      </div>
      <div class="quantity-counter">
        <span>Qty:</span>
        <input type="number" value="1" min="1"/>
      </div>
    </div>

    <div class="cart-item">
       
      <img src="https://m.media-amazon.com/images/I/51seH-SzjuL.jpg" alt="Book 2" class="product-image"/>
      <div class="product-details">
        <p class="product-name">Book 2</p>
        <p class="price">$24.99</p>
      </div>
      <div class="quantity-counter">
        <span>Qty:</span>
        <input type="number" value="2" min="1"/>
      </div>
    </div>

  

    <div class="total-amount">
      Total: $44.98
    </div>

    <a href="#" class="checkout-btn">Proceed to Checkout</a>
  </div>
  )
}

export default Cart