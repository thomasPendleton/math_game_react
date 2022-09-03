import React, { useState, useRef, useEffect } from "react"
import "./PlayNow.style.css"
import { GameContext } from "../../context/GameContext.js"
import GameComplete from "../GameComplete/GameComplete"
import { GrFormSubtract } from 'react-icons/gr';



const PlayNow = () => {
  const inputRef = useRef()
  const [answerValue, setAnswerValue] = useState("")
  const { checkAnswer, firstNumber, secondNumber, operation, gameOver } =
    React.useContext(GameContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    checkAnswer(+answerValue)
    setAnswerValue("")
  }

  return (
    <div className="questionContainer">
      <section className="question">
        <h4 className="firstNumber">{firstNumber}</h4>
        <h4 className="secondNumber">
          <span className="operation">
            {operation === "multiplication" ? "X" : "-"}
          </span>
          {secondNumber}
        </h4>
        <h4 className="equals">=</h4>
      </section>
      <div className="line"></div>
      <form className="answer-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={inputRef}
          className="answer"
          max="145"
          type="number"
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
      </form>
    </div>
  )
}

export default PlayNow
