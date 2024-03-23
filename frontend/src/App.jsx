import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import HeroSection from "./components/HeroSection.jsx"
import ContentSection from "./components/ContentSection.jsx"
import Footer from "./components/Footer.jsx"
import CustomWords from "./components/CustomWords.jsx"
import Cards from "./components/Cards.jsx"

function App() {


  return (
    <>
    <Router>
    <div className="flex flex-col h-screen w-full">
       <Navbar/>
       <HeroSection/>
       {/* <ContentSection/>
       <CustomWords/> */}
       <Cards/>
       <Footer/>
    </div>
    </Router>  
    </>
  )
}

export default App
