import React, { useState } from 'react'
import StatusBar from './components/StatusBar/StatusBar.js'
import GameBox from './components/GameBox/GameBox'

function App() {
  const [value, setValue] = useState(0)

  const handleTabChange = (index) => {
    setValue(index)
  }

  return (
    <div className="App">
      <StatusBar handleTabChange={handleTabChange} value={value} />
      <GameBox value={value} />
    </div>
  )
}

export default App
