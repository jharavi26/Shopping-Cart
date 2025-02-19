import React from 'react';
import "./Style.css";


function SingleProduct({item}) {

  // const {state :{cart}, dispatch}  = CartState();

  return (
    <div className='product'>
      <div className='product-image'>
       <img src = {item.thumbnail} alt = {item.description}/>
       <span>Category : {item.category}</span>
       <span>Price : {item.price}</span>
       <span>Rating : {item.rating}</span>
       <button style = {{backgroundColor : "green"}}>Add to Cart</button>
       <button style={{backgroundColor :"red"}}>Remove the Card</button>
      </div>
     
      
    </div>
  )
}

export default SingleProduct
