import React, { useState } from 'react';
import "./Style.css"
import { CartState } from './context/Context';

const Filter = () => {


  const {productState , productDispatch} = CartState();

  console.log(productState);



  return (
    <div className='filter'>
      <span style={{fontWeight:"bolder" , fontSize:"20px"}}>Fiter Component</span>
      <span>Price : </span>
      <span><input type='radio' name = "filtering" value = 'LowToHigh'
       checked={productState.sort === "LowTOHigh"} 
       onChange={()=>productDispatch({ type : "SORT_BY_PRICE",
        payload : "LowTOHigh",
      })} ></input>LowToHigh</span>
      <span><input type='radio' name = "filtering" value = 'HighToLow'
       checked={productState.sort === "HighToLow"} onChange={()=>productDispatch({ type : "SORT_BY_PRICE",
        payload : "HighToLow",
      })} ></input>HighToLow</span>


      <button style={{fontSize:"14px" , width : "50%" }} onClick={()=>
          productDispatch({type : "CLEAR_FILTERS",})}>
          Clear Filters</button>

 
    </div>
  )
}

export default Filter
