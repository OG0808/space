import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import "./styles/App.css"
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Destination from './routes/Destination'
import Crew from './routes/Crew'
import Technology from './routes/Technology'
import { useBgStore } from './store/useBgStore'





const App = () => {
  const bg = useBgStore(state => state.bg)

  const [changeBG, setChangeBG] = useState("")

  useEffect(() => {
    if (bg === 1) {
      return setChangeBG("DESTINATION")
    } else if (bg === 2) {
      return setChangeBG("CREW")
    } else if (bg === 3) {
      return setChangeBG("TECHNOLOGY")
    }
  }, [bg])


  return (
    <div className={changeBG ? changeBG : "HOME"}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App