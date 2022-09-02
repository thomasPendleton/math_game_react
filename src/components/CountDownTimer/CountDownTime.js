import React, { useState, useEffect } from "react"
import { GameContext } from "../../context/GameContext"
import "./countDownTime.css"

const CountDownTime = () => {
  const { gameTime, setGameOver, gameOver, playing, setPlaying } =
    React.useContext(GameContext)
  const [timeLeft, setTimeLeft] = useState(gameTime)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1)
      }
      if (timeLeft === 0) {
        clearInterval(myInterval)
        setGameOver(true)
        setPlaying(false)
      } else {
        setTimeLeft(timeLeft - 1)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <div className="time-display">
      <h4>{timeLeft}</h4>
    </div>
  )
}

export default CountDownTime
