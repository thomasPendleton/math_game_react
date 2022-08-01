import React, { useState, useEffect } from 'react'
import StatusBar from './components/StatusBar/StatusBar.js'
import GameBox from './components/GameBox/GameBox'

function App() {
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [operation, setOperation] = useState('multiplication')
  const [value, setValue] = useState(0)
  const [firstNumber, setFirstNumber] = useState(12)
  const [secondNumber, setSecondNumber] = useState(1)
  const [playerName, setPlayerName] = useState('')

  function randomMath(x) {
    return Math.floor(Math.random() * 12) + 1
  }
  useEffect(() => {
    let num1 = randomMath()
    let num2 = randomMath()
    if (num1 > num2) {
      setFirstNumber(num1)
      setSecondNumber(num2)
    } else {
      setFirstNumber(num2)
      setSecondNumber(num1)
    }
  }, [])

  const handleTabChange = (index) => {
    setValue(index)
  }

  return (
    <div className="App">
      <StatusBar
        handleTabChange={handleTabChange}
        wrong={wrong}
        correct={correct}
      />

      <GameBox
        value={value}
        player={setPlayerName}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
      />
    </div>
  )
}

export default App
