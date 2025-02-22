import React from 'react';
import { CartState } from './context/Context';
import SingleProduct from './SingleProduct';
import "./Style.css"
import Filter from './Filter';

const Home = () => {

  const { state : {products}, 
  productState : {sort , searchQuery } } = CartState();


  const transformProducts = ()=>{
    let sortedProducts = [...products];

    if(sort)
    {
      sortedProducts = sortedProducts.sort((a,b)=>
        sort ==="LowTOHigh" && a.price-b.price
      )
    }
    else{
      sortedProducts = sortedProducts.sort((a,b)=>
        sort ==="HighToLow" && b.price-a.price
    )
    }
    if(searchQuery)
    {
      sortedProducts = sortedProducts.filter((item)=>
        item.category.toLowerCase().includes(searchQuery)
      );
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
