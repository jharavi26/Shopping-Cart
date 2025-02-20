import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import { Badge } from 'primereact/badge';
import "./Style.css"
import { CartState } from './context/Context';
import { AiFillDelete } from 'react-icons/ai';



function Header() {

 const {state  : {cart}, dispatch } = CartState();
 const [open , setOpen] = useState(false); 


 const handleClick = ()=>{
  if(cart.length>0){
    setOpen((prev)=>!prev)
  }
 } 


  return (
    <div className='header'>
      <Link className='link' to="/">Shopping Cart</Link>
      <input type='text' placeholder='Search a Product'></input>
      <button onClick={()=>handleClick()} >
        <FaShoppingCart/>
        <Badge value={cart.length}></Badge> 
      </button>

    
    
      {open ?  (
        <>
        <div className='add'>
       {cart.map((item)=>(
        <span className='cartitem' key = {item.id}>
        <img src = {item.thumbnail} className='cartimage' alt = {item.title}/>
        <div className='cartDetails'>
          <span>{item.category}</span>
          <span>{item.price.toString().split(".")[0]}</span>
        </div>
        <AiFillDelete style = {{fontSize : "20px" , cursor : "pointer", color:"black"}}
        onClick={()=>{
          dispatch({
            type : "REMOVE_FROM_CART",
            payload : item,
          })
        }}
        />
        </span> 
       )
    )}
    <Link to={"/cart"}>
    <button style = {{width : "90%", fontSize:"14px" , marginLeft : "10px", backgroundColor : "blue" , color  : "white"}}>Go to Cart</button>
    </Link>
    </div>
        </>
      )  : null}  
   
    </div>
   
  )
}

export default Header
