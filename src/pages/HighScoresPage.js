import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SingleHighScore from "../components/SingleHighScore"
import { GameContext } from "../context/GameContext"


const HighScoresPage = () => {
  const { gameOver } =
    React.useContext(GameContext)
  const [scoreState, setScoreState] = useState([])

  const fetchHighScores = async () => {
    const response = await fetch("http://localhost:3005/")
    const data = await response.json()
    setScoreState(data)
  }

  useEffect(() => {
    fetchHighScores()
  }, [gameOver])
  console.log(scoreState)
  return (
    <Wrapper>
      <h1>High Scores Global Leader board</h1>
      <div className="container">
        {scoreState.map((singleScore, idx) => {
          return (
            <SingleHighScore key={singleScore.id} {...singleScore} idx={idx} />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 40px auto;
  .container {
    background-color: gray;
    border-radius: 5px;
    padding: 20px 0;
  }
  h1 {
    text-align: center;
  }
  @media only screen and (min-width: 500px) {
    .container {
      margin: 0 auto;
      width: 90%;
      max-width: 500px;

    }
  }
`
export default HighScoresPage
