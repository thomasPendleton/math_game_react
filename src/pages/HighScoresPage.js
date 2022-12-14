import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SingleHighScore from "../components/SingleHighScore"

const HighScoresPage = () => {
  const [scoreState, setScoreState] = useState([])
  const fetchHighScores = async () => {
    const response = await fetch("http://localhost:3005/")
    const data = await response.json()
    setScoreState(data)
    console.log(data)
  }

  useEffect(() => {
    fetchHighScores()
  }, [])
  console.log(scoreState)
  return (
    <Wrapper>
      <h1>High Scores Global Leader board</h1>
      <div className="container">
        {scoreState.map((singleScore) => {
          return <SingleHighScore key={singleScore.id} {...singleScore} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 40px auto;
  background-color: gray;
  width: 70%;
  h1 {
    text-align: center;
  }
`
export default HighScoresPage
