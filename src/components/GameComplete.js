import React, { useEffect } from "react"
import styled from "styled-components"
import { GameContext } from "../context/GameContext"
import applause from "../assets/sounds_applause.mp3"
import { useNavigate } from "react-router-dom"

const GameComplete = () => {
  let navigate = useNavigate()
  const { correct, gameTime, playerName, answeredWrong, gameOver, wrong, operation, level } =
    React.useContext(GameContext)

  const newScoreFetch = async () => {
    const response = await fetch("https://shrouded-refuge-51814.herokuapp.com/score", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerName,
        gameTime,
        correct,
        wrong,
        operation, 
        level
      }),
    })
    const data = await response.json()
    // console.log(data)
  }

  useEffect(() => {
    if (correct > 9 && wrong < 5) {
      new Audio(applause).play()
    }
    if(wrong < 10 && correct > 10){
      newScoreFetch()
    }
  }, [gameOver])

  return (
    <Wrapper>
      <h2>Time is up!</h2>
      <h3>Good Job {playerName}!</h3>
      <h4>
        You got {correct} correct
        <br /> in {gameTime} seconds.
      </h4>
      {answeredWrong.length > 0 && (
        <button
          className="check-missed"
          type="button"
          onClick={() => navigate('/missedquestions')}
        >
          See what you missed
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
    margin: 10px 0 30px;
    background-color: rgb(252, 87, 26);
    border-radius: 5px;
    padding: 10px 20px;
    border: 1px solid #333;
    cursor: pointer;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    opacity: 1;
    font-size: 24px;
    transition: transform 0.3s ease;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transition: box-shadow 0.1s;
      transform: translateY(4px);
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }
  }

  h4 {
    margin: 0 auto 20px;
  }
  h2 {
    /* width: 100%; */
  }
`

export default GameComplete
