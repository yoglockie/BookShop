import React, { useState } from 'react'
import "./Navbar.css";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai";
import {BsSearch as Search} from "react-icons/bs" ;
import { useCartContext } from '../../context/cartcontext';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
const Navbar = () => {
  
  const {total_item} = useCartContext();

  return (
    <div>
    
   
   <nav className="navbar">
  <div className="left-section">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2voLX6l8xo_rILZYc4dXoLspHRJJ4y4owzNoHne&s" alt="Company Logo"/>
  </div>
  <div className="middle-section">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/service">Services</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="right-section">
    <div className="cart-icon">
      <Link to="/cart">
        🛒
        {total_item > 0 && <span className="cart-count">{total_item}</span>}
      </Link>
    </div>
    {/* <button className="login-button">Login</button> */}
  </div>
  
</nav>

    </div>
  )
}

export default Navbar