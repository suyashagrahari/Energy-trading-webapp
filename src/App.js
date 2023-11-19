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
import Form from "../src/components/Form"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from './components/Teams'
import Footer from './components/Footer'
import Transaction from "../src/page/Transaction"
const App = () => {
  return (
    <>
      {/* <Form/> */}
      {/* <Herosection/> */}
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={
      <>
      <Herosection/>
      <Solution/>
      <Teams/>
      </>
      }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/auction" element={<Auction/>}/>
      <Route path="/market" element={<Marketplace/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      
      {/* <Solution/> */}
      {/* <Login/>
      <Signin/>
      <Marketplace/>
      <Auction/>
      <Contact/> */}
      </Routes>
      <Footer/>
      </Router>
     
    </>
  )
}

export default App