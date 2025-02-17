import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'

function App() {
  

  return (
    <BrowserRouter>
  
    <Header />
    <Routes >
     <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    
     
  
    

    </BrowserRouter>
  )
}

export default App
