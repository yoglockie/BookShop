import React from 'react'
import './AddProduct.css'
const AddProduct = () => {
  return (
    <div className='parent'>
     <h1>Add Product</h1>   
    <form>
    <label for="id">ID:</label>
    <input type="text" id="id" name="id" required/>

    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required/>

    <label for="author">Author:</label>
    <input type="text" id="author" name="author" required/>

    <label for="price">Price:</label>
    <input type="number" id="price" name="price" required/>

    <label for="category">Category:</label>
    <select id="category" name="category" required>
      <option value="books">Books</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      
    </select>

    <button type="submit" id='btn'>Add Product</button>
  </form>
    </div>
  )
}

export default AddProduct