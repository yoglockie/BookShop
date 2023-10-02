import React from 'react'
import "./Navbar.css";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai";
import {BsSearch as Search} from "react-icons/bs" 
const Navbar = () => {
  return (
    <div>
    <header>
        <div class="logo">
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2voLX6l8xo_rILZYc4dXoLspHRJJ4y4owzNoHne&s" alt="Company Logo" />
        </div>
        <div class="search-section">
            <input type="text" class="search-input" placeholder="Search..."/>
            <Search id='s-icon'/>
        </div>
        <div class="cart-icon">
            
            <Cart/>
        </div>
    </header>
    </div>
  )
}

export default Navbar