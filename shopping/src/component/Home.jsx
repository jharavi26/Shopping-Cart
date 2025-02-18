import React from 'react';
import { CartState } from './context/Context';
import SingleProduct from './SingleProduct';
import "./Style.css"
import Filter from './Filter';

const Home = () => {

  const { state : {products} } = CartState();
  console.log("state in Home :" , products);
  return (
    <div className='home'>
      <Filter />
    
      <div className='productContainer'>
        {
          products.map((item)=>{
            return <SingleProduct item = {item} key = {item.id}/>
          })
        }
      </div>
      
    </div>
  )
}

export default Home
