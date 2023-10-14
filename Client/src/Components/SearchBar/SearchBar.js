import React from 'react'
import "./SearchBar.css";
import {Link} from 'react-router-dom';
const SearchBar = () => {


  return (
    <div className='search'>
         <div className="search-bar">
         <input type="text" placeholder="Search for a book"/>
         <Link to="/search"><button className="search-button">&#128269;</button></Link>
         </div>
    </div>
  )
}

export default SearchBar