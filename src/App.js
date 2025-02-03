import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallary';
import History_b from './components/History_b';


const App = () => {
  return (
    <div style={{background:"#fff"}}>
      {/* 
      <Home/> */}

      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/gallary' element={<Gallery/>} />
          <Route exact path='/siteHistory' element={<History_b/>} />
       
        </Routes>
      </Router>
    </div>
  )
}

export default App
