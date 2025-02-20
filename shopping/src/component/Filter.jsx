import React, { useState } from 'react';
import "./Style.css"
import Rating from './Rating';
import { CartState } from './context/Context';

const Filter = () => {

  const [rate, setRate] = useState(0)

  const {productState: {price , searchQuery} , productDisapatch} = CartState();


  return (
    <div className='filter'>
      <span style={{fontWeight:"bolder" , fontSize:"20px"}}>Fiter Component</span>
      <span><input type='checkbox' onChange={()=>productDisapatch({
        type : "SORT_BY_PRICE",
        payload : "LowTOHigh",
      })} ></input>Price</span>


      <button style={{fontSize:"14px" , width : "50%" }} onClick={()=>productDisapatch}>Clear Filters</button>

 
    </div>
  )
}

export default Filter
