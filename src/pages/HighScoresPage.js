import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SingleHighScore from "../components/SingleHighScore"
import TableHeader from "../components/TableHeader"
import { GameContext } from "../context/GameContext"


const HighScoresPage = () => {
  const { gameOver } =
    React.useContext(GameContext)
  const [scoreState, setScoreState] = useState([])

  const fetchHighScores = async () => {
    const response = await fetch("https://shrouded-refuge-51814.herokuapp.com/getscores")
    const data = await response.json()
    console.log(data);
    if(data === 'failed to add score') return
    setScoreState(data)
  }

  useEffect(() => {
      fetchHighScores()
    console.log('highscores fetch')
  }, [gameOver])
  return (
    <Wrapper>
      <h1>High Scores Global Leader board</h1>
      <div className="container">
        <TableHeader />
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
    background-color: lightgray;
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
      max-width: 550px;

    }
  }
`
export default HighScoresPage
