import React from 'react'
import styled from "styled-components"
import { GameContext } from "../../context/GameContext"

const GameComplete = () => {
  const { correct, gameTime, playerName } = React.useContext(GameContext)
  return (
    <Wrapper>
      <h2>Time is up!</h2>
      <h3>Good Job {playerName}!</h3>
      <h4>
        You got {correct} correct
        <br /> in {gameTime} seconds
      </h4>
    
      <h4> Press Play Now to try again </h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 30px;
  color: rgb(17, 23, 23);
  h2 {
    width: 100%;
  }
`

export default GameComplete