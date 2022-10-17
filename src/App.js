import React, { useState } from 'react'
import StatusBar from './components/StatusBar/StatusBar.js'
import GameBox from './components/GameBox/GameBox'

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
