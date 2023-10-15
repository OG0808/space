import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import "./styles/App.css"
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Destination from './routes/Destination'
import Crew from './routes/Crew'
import Technology from './routes/Technology'
import { useBgStore } from './store/useBgStore'





const App = () => {



   const bg = useBgStore(state=>state.bg)
  
  

  return (
    <div className={bg ? bg : "HOME"}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='destination' element={<Destination/>}/>
          <Route path='crew' element={<Crew/>}/>
          <Route path='technology' element={<Technology/>}/>
        </Routes>
    </div>
  )
}

export default App