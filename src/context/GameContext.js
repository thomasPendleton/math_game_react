import React, { useState, useEffect, useReducer } from "react"
import reducer from "../reducer/gameReducer"
import correctSound from "../assets/ding.mp3"
import wrongSound from "../assets/sounds_wrong.mp3"
const GameContext = React.createContext()

const getLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem("scores") || "[]")
  localStorage.setItem("scores", JSON.stringify(scores))
  return scores
}

const initialState = {
  playerName: "",
  operation: "",
  highScores: getLocalStorage(),
  gameTime: null,
  level: "easy",
  isPlaying: false,
  gameOver: false,
}

const GameContextProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [answerSubmitted, setanswerSubmitted] = useState(true)

  const [answeredWrong, setAnsweredWrong] = useState([])

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (correct === 0) return
    if (state.gameOver && state.playerName) {
      let scores = JSON.parse(localStorage.getItem("scores") || "[]")
      // the next 3 filters are used during testing only.
      scores = scores.filter((item) => item.playerName !== "")
      scores = scores.filter((item) => item.gameTime > 30)
      scores = scores.filter((item) => item.correct !== 0)
      const { gameTime } = state
      const newHighScore = {
        playerName: state.playerName,
        operation: state.operation,
        correct,
        gameTime,
        level: state.level,
      }
      scores.push(newHighScore)
      scores.sort((a, b) => b.correct - a.correct)
      localStorage.setItem("scores", JSON.stringify(scores))
    }
    dispatch({ type: "SET_HIGH_SCORES", payload: getLocalStorage() })
  }, [state.gameOver])

  const setPlayerNameReducer = (name) => {
    dispatch({ type: "SET_PLAYER_NAME", payload: name })
  }
  const setOperationReducer = (operation) => {
    dispatch({ type: "SET_OPERATION", payload: operation })
  }
  const setGameTimeReducer = (time) => {
    dispatch({ type: "SET_GAMETIME", payload: time })
  }
  const setLevelReducer = (level) => {
    dispatch({ type: "SET_LEVEL", payload: level })
  }
  const setIsPlayingReducer = (boolean) => {
    dispatch({ type: "SET_PLAYING", payload: boolean })
  }
  const gameOverReducer = (boolean) => {
    dispatch({ type: "SET_GAMEOVER", payload: boolean })
  }

  useEffect(() => {
    function randomMath(x) {
      const highestNumber =
        state.operation === "subtraction" ? 20 : state.level === "easy" ? 5 : 12
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
      new Audio(correctSound).play()
      setCorrect((prev) => prev + 1)
    } else {
      let incorrect = {
        firstNumber,
        secondNumber,
        correctAnswer,
        value,
        operation: state.operation,
      }

      new Audio(wrongSound).play()
      setAnsweredWrong((prev) => [...prev, incorrect])
      setWrong((prev) => prev + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{
        ...state,
        answeredWrong,
        setAnsweredWrong,
        checkAnswer,
        correct,
        setCorrect,
        wrong,
        setWrong,
        firstNumber,
        secondNumber,
        setPlayerNameReducer,
        gameOverReducer,
        setIsPlayingReducer,
        setOperationReducer,
        setGameTimeReducer,
        setLevelReducer,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
