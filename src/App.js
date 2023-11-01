import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Trading from './components/Trading'
import Solution from './components/Solution'
import Login from './page/Login'
import Signin from './page/Signin'
import Marketplace from './page/Marketplace'
import Auction from './page/Auction'
import Contact from './page/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Herosection/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
      <>
      <Herosection/>
      <Solution/>
      </>
      }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/auction" element={<Auction/>}/>
      <Route path="/market" element={<Marketplace/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      {/* <Solution/> */}
      {/* <Login/>
      <Signin/>
      <Marketplace/>
      <Auction/>
      <Contact/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App