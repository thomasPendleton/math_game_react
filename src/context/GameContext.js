import React, { useState, useEffect, useReducer } from "react"
import reducer from "../reducer/gameReducer"
const GameContext = React.createContext()

const getLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem('scores') || '[]')
  localStorage.setItem(
    "scores",
    JSON.stringify(scores)
  )
  return scores
}

const initialState = {
  playerName: "",
  operation: "multiplication",
  highScores: getLocalStorage(),
  gameTime: 45,
  
}

const GameContextProvider = ({ children }) => {
  const [gameTime, setGameTime] = useState(45)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [answerSubmitted, setanswerSubmitted] = useState(true)
  //change gameOver back to false
  const [gameOver, setGameOver] = useState(false)
  const [playing, setPlaying] = useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (gameOver && state.playerName) {
      let scores = JSON.parse(localStorage.getItem("scores") || "[]")
      // the next two filters are used during testing only.
      // scores = (scores.filter((item) => item.playerName !== ''))
      // scores = (scores.filter((item) => item.gameTime > 30))

      const newHighScore = {
        playerName: state.playerName,
        operation: state.operation,
        correct,
        gameTime,
      }

      if (
        scores.find(
          (item) =>
            state.playerName === item.playerName &&
            state.operation === item.operation &&
            correct > item.correct
        )
      ) {
        // console.log('same name and operation and higher correct')
        scores.push(newHighScore)
      }
      if (!scores.find((item) => state.playerName === item.playerName)) {
        // console.log('new player')
        scores.push(newHighScore)
      }

      localStorage.setItem("scores", JSON.stringify(scores))
    }
    dispatch({ type: "SET_HIGH_SCORES", payload: getLocalStorage() })
  }, [gameOver])

  const setPlayerNameReducer = (name) => {
    dispatch({ type: "SET_PLAYER_NAME", payload: name })
  }
  const setOperationReducer = (operation) => {
    dispatch({ type: "SET_OPERATION", payload: operation })
  }

  useEffect(() => {
    function randomMath(x) {
      const highestNumber = state.operation === "multiplication" ? 12 : 20
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

    if (state.operation === "multiplication") {
      setCorrectAnswer(num1 * num2)
    } else if (state.operation === "subtraction") {
      setCorrectAnswer(num1 - num2)
    }
  }, [answerSubmitted, state.operation])

  const checkAnswer = (value) => {
    setanswerSubmitted(!answerSubmitted)
    if (correctAnswer === value) {
      setCorrect((prev) => prev + 1)
    } else {
      setWrong((prev) => prev + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{
        ...state,
        checkAnswer,
        correct,
        setCorrect,
        wrong,
        setWrong,
        firstNumber,
        secondNumber,
        gameTime,
        setGameTime,
        setGameOver,
        gameOver,
        playing,
        setPlaying,
        setPlayerNameReducer,
        setOperationReducer,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
