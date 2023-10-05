import React from 'react'
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className='search'>
         <div className="search-bar">
         <input type="text" placeholder="Search for a book"/>
         <button className="search-button">&#128269;</button>
         </div>
    </div>
  )
}

export default SearchBar