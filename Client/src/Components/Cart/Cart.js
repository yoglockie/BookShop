import React from 'react'
import "./Cart.css"

const Cart = () => {
  return (
    <div class="CartContainer">
    <div class="Header">
        <h3 class="Heading">Shopping Cart</h3>
        <h5 class="Action">Remove all</h5>
    </div>

    <div class="Cart-Items">
          <div class="image-box">
              <img src="https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg" alt='' style={{ height:"120px" }} />
          </div>
          <div class="about">
              <h1 class="title">Apple Juice</h1>
              <h3 class="subtitle">250ml</h3>
              <img src="images/veg.png" alt='' style={{ height:"30px" }}/>
          </div>
          <div class="counter">
              <div class="btn">+</div>
              <div class="count">2</div>
              <div class="btn">-</div>
          </div>
          <div class="prices">
              <div class="amount">$2.99</div>
              <div class="save"><u>Save for later</u></div>
              <div class="remove"><u>Remove</u></div>
          </div>
    </div>

    <div class="Cart-Items pad">
          <div class="image-box">
              <img src="https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg"  alt='' style={{ height:"120px" }} />
          </div>
          <div class="about">
              <h1 class="title">Grapes Juice</h1>
              <h3 class="subtitle">250ml</h3>
              <img src="images/veg.png" alt='' style={{ height:"30px" }}/>
          </div>
          <div class="counter">
              <div class="btn">+</div>
              <div class="count">1</div>
              <div class="btn">-</div>
          </div>
          <div class="prices">
              <div class="amount">$3.19</div>
              <div class="save"><u>Save for later</u></div>
              <div class="remove"><u>Remove</u></div>
          </div>
    </div>
  <hr/> 
  <div class="checkout">
  <div class="total">
      <div>
          <div class="Subtotal">Sub-Total</div>
          <div class="items">2 items</div>
      </div>
      <div class="total-amount">$6.18</div>
  </div>
  <button class="button">Checkout</button></div>
</div>
  )
}

export default Cart