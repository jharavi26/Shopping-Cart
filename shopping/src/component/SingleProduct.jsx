import React from 'react';
import { CartState } from './context/Context';
import "./Style.css";


function SingleProduct({item}) {

  const {state :{cart}, dispatch,}  = CartState();

  return (
    <div className='product'>
      <div className='product-image'>
       <img src = {item.thumbnail} alt = {item.description}/>
       <span>Category : {item.category}</span>
       <span>Price : {item.price}</span>
       <span>Rating : {item.rating}</span>
       { cart.some((p)=>p.id === item.id) ? (
        <button style={{backgroundColor :"yellow"}} onClick={()=>dispatch({type : "REMOVE_FROM_CART" , payload : item, })}>Remove </button> ) : (
       <button style = {{backgroundColor : "green" , color :"white"}} onClick={()=> dispatch({type : "ADD_TO_CART", payload : item,})}>Add to Cart</button>
        )}
      </div>
     
      
    </div>
  )
}

export default SingleProduct
