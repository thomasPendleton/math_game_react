import React, { useContext } from "react"
import styled from "styled-components"
import { GameContext } from "../context/GameContext"

const MissedQuestions = () => {
  const { answeredWrong } = useContext(GameContext)
  return (
    <Wrapper>
      <h1>Missed Questions</h1>
      <div className="questions">
        {answeredWrong.map((question, idx) => {
          const { firstNumber, operation, secondNumber, correctAnswer, value } =
            question
          return (
            <div className="question" key={idx}>
              <p>{firstNumber}</p>

              <p className="second">
                {operation === "multiplication" ? (
                  <span className="operation">&#10006;</span>
                ) : (
                  <span className="operation">&minus;</span>
                )}
                {secondNumber}
              </p>
              <div className="hr"></div>
              <p>{correctAnswer}</p>
              <span className="incorrect">{value}</span>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  // change height off
  /* height: 500px; */
  text-align: center;
  .questions {
    display: grid;
    font-size: 2rem;
    margin: 10px
    10px 20px;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .question {
      position: relative;
      display: flex;
      background-color: #ffffff22;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 5px;
      .hr {
        width: 50%;
        height: 1px;
        background-color: #222;
        margin: 0 auto;
      }
      p {
        margin: 0;
      }
      .second {
        position: relative;
      }
      .operation {
        position: absolute;
        font-size: 1.1rem;
        left: 20%;
        bottom: 3px;
      }
      .incorrect{
        font-size: 1.2rem;
        text-decoration: line-through;
        position: absolute;
        color: red;
        bottom: 5px;
        right: 5px;
      }
    }
  }
`
export default MissedQuestions
