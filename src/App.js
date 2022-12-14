import React, { useState } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import StatusBar from "./components/StatusBar.js"
import GameBox from "./components/GameBox"
import HighScoresPage from './pages/HighScoresPage.js'

function App() {
  const [value, setValue] = useState(0)

  const handleTabChange = (index) => {
    setValue(index)
  }


  return (
    <div>
      <StatusBar handleTabChange={handleTabChange} value={value} />
      <GameBox handleTabChange={handleTabChange} value={value} />
    </div>
  )
}

export default App
