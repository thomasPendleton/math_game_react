import React from 'react'
import styled from "styled-components"
import { GameContext } from "../context/GameContext"

const GameComplete = ({ handleTabChange }) => {
  const { correct, gameTime, playerName, answeredWrong } =
    React.useContext(GameContext)
  return (
    <Wrapper>
      <h2>Time is up!</h2>
      <h3>Good Job {playerName}!</h3>
      <h4>
        You got {correct} correct
        <br /> in {gameTime} seconds
      </h4>
      {answeredWrong.length > 0 && (
        <button
          className="check-missed"
          type="button"
          onClick={() => handleTabChange(4)}
        >
          See What you missed
        </button>
      )}
      <h4 className="press-play"> Press Play Now to try again</h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 30px;
  color: rgb(17, 23, 23);
  margin-bottom: 40px;
  .check-missed {
    margin: 10px;
    background-color: orangered;
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid #333;
    cursor: pointer;
  }
  h4 {
    margin: 0 auto 20px;
  }
  h2 {
    /* width: 100%; */
  }
`

export default GameComplete