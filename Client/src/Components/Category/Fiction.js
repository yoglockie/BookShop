import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard'

const Fiction = () => {
  const [products,setproducts] = useState([]);
  
  useEffect(()=>{
      
      const fetcheddata = async()=>{
          try {
            const response = await fetch("http://localhost:8080/products/fiction");
            const data = await response.json();
            console.log(data)
            setproducts(data);
          } catch (error) {
            console.log(error);
          }
      }
      fetcheddata(); 
  },[])
  return (
    <>
      {
        
        products.map(product=>(
          <BookCard
          key={product._id} // Make sure to use a unique key for each item in the list
          imgurl={product.image}
          title={product.title}
          price={product.price}
        />
        ))
      }
      
     
     

    </>
  )
}

export default Fiction