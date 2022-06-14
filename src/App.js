import React, { useState } from 'react'
import StatusBar from './components/StatusBar/StatusBar.js'
import GameBox from './components/GameBox/GameBox'

function App() {
  const [value, setValue]= useState(0)

  const handleTabChange = (index) => {
    setValue(index)
  }
  console.log(value);
  return (
    <div className="App">
      <StatusBar handleTabChange={handleTabChange}/>
      <GameBox value={value}/>
    </div>
  )
}

export default App
