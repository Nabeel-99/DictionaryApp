import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import HeroSection from "./components/HeroSection.jsx"
import ContentSection from "./components/ContentSection.jsx"
import Footer from "./components/Footer.jsx"
import CustomWords from "./components/CustomWords.jsx"
import Cards from "./components/Cards.jsx"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)

  }
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white'
    document.body.style.transition = '.5s ease all'
    document.body.style.color = isDarkMode ? 'white' : 'black'
  },[isDarkMode])
  return (
    <>
    <Router>
    <div className="flex flex-col h-full w-screen">
       <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
       <HeroSection darkMode={isDarkMode}/>
       {/* <ContentSection/>
       <CustomWords/> */}
       <Footer/>
    </div>
    </Router>  
    </>
  )
}

export default App
