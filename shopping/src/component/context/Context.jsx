import React, { useContext, useEffect, useReducer, createContext } from 'react';
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
  const initialState = {
    products: [],
    cart: []
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Fetch data and update the state via dispatch
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Products:", data.products);  // Debugging log
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      })
      .catch((error) => console.log("Fetch Error:", error));
  }, []);


  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
