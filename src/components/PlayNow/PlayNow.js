import React, { useState } from "react"
import "./PlayNow.style.css"
import { GameContext } from "../../context/GameContext.js"

const PlayNow = () => {
  const [answerValue, setAnswerValue] = useState('')
  const { checkAnswer, firstNumber, secondNumber, operation } = React.useContext(GameContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(answerValue)
    checkAnswer(+answerValue)
    setAnswerValue('')
  }

  return (
    <div className="questionContainer">
      <section className="question">
        <h4 className="firstNumber">{firstNumber}</h4>
        <h4 className="secondNumber">
          <span className="operation">{operation === 'multiplication' ? 'X' : '-' }</span>
          {secondNumber}
        </h4>
      </section>
      <div className="line"></div>
      <form className="answer-form" onSubmit={(e) => handleSubmit(e)}>
        <input
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
