import React from 'react'
import "./Navbar.css";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai";
import {BsSearch as Search} from "react-icons/bs" ;
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
    {/* <header>
        <div className="logo">
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2voLX6l8xo_rILZYc4dXoLspHRJJ4y4owzNoHne&s" alt="Company Logo" />
        </div>
        <div className="search-section">
            <input type="text" className="search-input" placeholder="Search..."/>
            <Search id='s-icon'/>
        </div>
        <div className="cart-icon">
            
            <Cart/>
        </div>
    </header> */}
   
   <nav className="navbar">
  <div className="left-section">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2voLX6l8xo_rILZYc4dXoLspHRJJ4y4owzNoHne&s" alt="Company Logo"/>
  </div>
  <div className="middle-section">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div className="right-section">
    <div className="cart-icon">
      <Link to="/cart">🛒</Link>
    </div>
    <button className="login-button">Login</button>
  </div>
  <div className="burger-menu">&#9776;</div>
</nav>

    </div>
  )
}

export default Navbar