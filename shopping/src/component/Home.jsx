import React from 'react';
import { CartState } from './context/Context';

const Home = () => {

  const { state } = CartState();
  console.log("state in Home :" , state);
  return (
    <div>
      
    </div>
  )
}

export default Home
