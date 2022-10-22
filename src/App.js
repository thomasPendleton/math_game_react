import React, { useState } from 'react'
import StatusBar from "./components/StatusBar.js"
import GameBox from "./components/GameBox"
import HighScoresContext from './context/HighScoresContext.js'

function App() {
  const [value, setValue] = useState(0)

  const handleTabChange = (index) => {
    setValue(index)
  }

  return (
    <div>
      <StatusBar handleTabChange={handleTabChange} value={value} />
      <GameBox handleTabChange={handleTabChange} value={value} />
      {/* <HighScoresContext /> */}
    </div>
  )
}

export default App
