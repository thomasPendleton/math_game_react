import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { GameContext } from "../context/GameContext.js"

const PlayNow = () => {
  const inputRef = useRef()
  const [answerValue, setAnswerValue] = useState("")
  const { checkAnswer, firstNumber, secondNumber, operation } =
    React.useContext(GameContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(answerValue === '') return
    checkAnswer(+answerValue)
    setAnswerValue("")
  }

  return (
    <Wrapper className="questionContainer">
      <section className="question">
        <h4 className="firstNumber">{firstNumber}</h4>
        <h4 className="secondNumber">
          <span className="operation">
            {operation === "multiplication" ? (
              <span>&#10006;</span>
            ) : (
              <span>&minus;</span>
            )}
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  align-items: center;
  height: 100%;
  max-width: 420px;
  h4 {
    margin: 0px;
  }
  .question {
    text-align: right;
    font-size: 5rem;
  }
  .secondNumber {
    position: relative;
  }
  .line {
    background-color: black;
    height: 2px;
    width: 30%;
    margin: 10px auto;
  }
  .equals {
    display: none;
  }
  .operation {
    font-size: 2.7rem;
    position: absolute;
    left: -45px;
    bottom: 10px;
  }
  .answer-form {
    text-align: center;
  }
  .answer {
    width: 34%;
    font-size: 4.9rem;
    border-radius: 5px;
    text-align: center;
  }
  @media only screen and (max-width: 680px) {
  }

  @media only screen and (max-width: 450px) {
    flex-direction: row;
    /* align-items: flex-start; */
    justify-content: center;
    margin: 30px 10px 30px;
    .question {
      display: flex;
      flex-direction: row;
      font-size: 3.5rem;
    }
    .operation {
      font-size: 2.2rem;
      position: relative;
      left: 2px;
      top: -4px;
      margin: 10px 10px 10px;
    }
    .line {
      display: none;
    }
    .equals {
      display: block;
    }
    .answer-form {
      /* margin-top: 9px; */
    }
    .answer {
      font-size: 3rem;
      width: 80%;
    }
  }
`

export default PlayNow
