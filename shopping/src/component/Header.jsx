import React from 'react'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import { Badge } from 'primereact/badge';


function Header() {
  return (
    <div className='header'>
      <Link className='link' to="/">Shopping Cart</Link>
      <input type='text' placeholder='Search a Product' ></input>
      <button>
        <FaShoppingCart/>
        <Badge value="10"></Badge>

        
      </button>
    </div>
   
  )
}

export default Header
