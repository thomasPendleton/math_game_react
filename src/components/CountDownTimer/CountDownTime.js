import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GameContext } from "../../context/GameContext"


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
    <Wrapper>
      <p>{timeLeft}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid white;
  border-radius: 1px;
  width: 50px;
  height: 50px;
  margin: -10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Digital-7 Mono", sans-serif;
  /* font-family: 'Digital-7', sans-serif; */
  /* font-family: 'Digital-7 Italic', sans-serif; */
  color: red;
  background-color: black;
  box-shadow: 0 0 0 3px black;
  h4 {
    text-align: center;
    margin: -5px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 1.3rem;
    border: 2px solid white;
    border-radius: 1px;
    width: 35px;
    height: 35px;
    margin: 0px 15px;
    box-shadow: 0 0 0 3px black;
  }

  @media only screen and (max-width: 450px) {
    border: 1px solid white;
    font-size: 1.2rem;
    border-radius: 2px;
    width: 30px;
    height: 30px;
    margin: 8px;
    box-shadow: none;
  }
`

export default CountDownTime
