import React, { useState } from 'react';
import "./Style.css"
import Rating from './Rating';

const Filter = () => {
  const [rate, setRate] = useState(3)
  return (
    <div className='filter'>
      <span style={{fontWeight:"bolder" , fontSize:"20px"}}>Fiter Component</span>
      <div><label>Ascending<input type='radio'></input></label></div>
      <div><label>Descending<input type='radio'></input></label></div>
      <div><label>Out of Stock<input type='checkbox'></input></label></div>
      <div><label>Ascending<input type='checkbox'></input></label></div>
      <button style={{fontSize:"14px" , width : "50%"}}>Clear Filters</button>
      <span>Rating : <Rating rating = {rate} style={{cursor : "pointer"}}/></span>

 
    </div>
  )
}

export default Filter
