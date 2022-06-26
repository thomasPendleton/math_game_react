import React from 'react'
import './PlayNow.style.css'

const PlayNow = ({ firstNumber, secondNumber }) => {
  return (
   
      <div className="questionContainer">
        <section className="question">
          <h4 className="firstNumber">{firstNumber}</h4>
          <h4 className="secondNumber">
            <span className="operation">X</span>
            {secondNumber}
          </h4>
        </section>
        <div className="line"></div>
        <input className="answer" type="number" onSubmit={() => {}} />
      </div>
  
  )
}

export default PlayNow
