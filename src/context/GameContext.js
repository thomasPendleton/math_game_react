import React, { useState, useEffect } from "react"

const GameContext = React.createContext()

const GameContextProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('')
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operation, setOperation] = useState('multiplication')
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [answerSubmitted, setanswerSubmitted] = useState(true)
  const [gameTime, setGameTime] = useState(45)
  const [gameOver, setGameOver] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    function randomMath(x) {
      const highestNumber = operation === "multiplication" ? 12 : 20
      return Math.floor(Math.random() * highestNumber) + 1
    }

    let num1 = randomMath()
    let num2 = randomMath()
    if (num1 > num2) {
      setFirstNumber(num1)
      setSecondNumber(num2)
    } else {
      setFirstNumber(num2)
      setSecondNumber(num1)
      let x = num1
      num1 = num2
      num2 = x
    }

    if (operation === "multiplication") {
      setCorrectAnswer(num1 * num2)
    } else if (operation === "subtraction") {
      setCorrectAnswer(num1 - num2)
    }
  }, [answerSubmitted, operation])

  const checkAnswer = (value) => {
    setanswerSubmitted(!answerSubmitted)
    console.log(correctAnswer, value)
    if (correctAnswer === value) {
      setCorrect((prev) => prev + 1)
    } else {
      setWrong((prev) => prev + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{
        checkAnswer,
        setPlayerName,
        playerName,
        correct,
        setCorrect,
        wrong,
        setWrong,
        firstNumber,
        secondNumber,
        operation,
        setOperation,
        gameTime,
        setGameTime,
        setGameOver,
        gameOver,
        playing,
        setPlaying,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
