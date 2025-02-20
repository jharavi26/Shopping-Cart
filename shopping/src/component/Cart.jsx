import React, { useEffect, useState } from 'react'
import { CartState } from './context/Context';
import "./Style.css";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const {state  : {cart} , dispatch}  = CartState();

  const [total , setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc ,curr)=> acc + Number(curr.price)* curr.qty,0))
  },[cart])
  return (

    <div className='home'>
      <div className='productContainer'>
        { cart.length > 0 ? (
        <ol>
        <div className='listitem'>
          {

          cart.map((item)=>{
              return <div>
                <span><img src = {item.thumbnail} style = {{height:"100px" , width :"100px"}}/></span>
                <span style = {{marginRight:"10px"}}>Category : {item.category}</span>
                <span style = {{marginRight:"10px"}}>Price : {Math.floor(item.price)}</span>
                <span style = {{marginRight:"10px"}}>Rating : {Math.ceil(item.rating)}</span>
                <select onChange={(e)=>dispatch({type : "CHANGE_CART_QTY", payload : {
                  id : item.id,
                  qty : e.target.value,
                },})}>
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1}>
                      {num + 1}
                        </option>
                               ))}
                </select>

                <AiFillDelete style = {{fontSize : "20px" , cursor : "pointer", color:"black"}}
                          onClick={()=>{
                            dispatch({
                              type : "REMOVE_FROM_CART",
                              payload : item,
                            })
                          }}
                          />
                
                </div>
                
            })
           
          }
          </div> 
          
        </ol> ) : "" }
        <div className='summary'>
        <span className='title'>Subtotal ({cart.length}) items.</span>
        <span>Total :{Math.trunc(total)}</span>
        </div> 
      </div>

    </div> 
  )
}

export default Cart
