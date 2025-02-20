import React from 'react';
import { CartState } from './context/Context';
import SingleProduct from './SingleProduct';
import "./Style.css"
import Filter from './Filter';

const Home = () => {

  const { state : {products}, 
  productState : {sort , searchQuery} } = CartState();
  console.log("state in Home :" , searchQuery);

  const transformProducts = ()=>{
    let sortedProducts = [...products];

    if(sort)
    {
      sortedProducts = sortedProducts.sort((a,b)=>
        sort ==="lowTOHigh" && a.price-b.price
      )
    }
    return sortedProducts;
  }

  const transformedProducts = transformProducts();

  return (
    <div className='home'>
      <Filter />
    
      <div className='productContainer'>
        {
          transformedProducts.map((item)=>{
            return <SingleProduct item = {item} key = {item.id}/>
          })
        }
      </div>
      
    </div>
  )
}

export default Home
