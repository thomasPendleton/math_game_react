import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { GameContext } from "../context/GameContext"

const CountDownTime = () => {
  let navigate = useNavigate()
  const { gameTime, setGameOver, setIsPlayingReducer } = React.useContext(GameContext)
  const [timeLeft, setTimeLeft] = useState(gameTime)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1)
      }
      if (timeLeft <= 0) {
        clearInterval(myInterval)
        setGameOver(true)
        setIsPlayingReducer(false)
        navigate('/gamecomplete')
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  }, [timeLeft])

  return (
    <Wrapper>
      <p>{timeLeft}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid #FFFFFF;
  border-radius: 1px;
  width: 50px;
  height: 50px;
  margin: -10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Digital-7 Mono", sans-serif;
  color: #FF0000;
  background-color: #000000;
  box-shadow: 0 0 0 3px #000000;
  h4 {
    text-align: center;
    margin: -5px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 1.3rem;
    border: 2px solid #FFFFFF;
    border-radius: 1px;
    width: 35px;
    height: 35px;
    margin: 0px 15px;
    box-shadow: 0 0 0 3px #000000;
  }

  @media only screen and (max-width: 450px) {
    border: 1px solid #FFFFFF;
    font-size: 1.2rem;
    border-radius: 2px;
    width: 30px;
    height: 30px;
    margin: 8px;
    box-shadow: none;
  }
`

export default CountDownTime
