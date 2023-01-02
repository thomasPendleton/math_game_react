import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AdminButton from "../components/AdminButton"
import SingleHighScore from "../components/SingleHighScore"
import TableHeader from "../components/TableHeader"
import { GameContext } from "../context/GameContext"
// import { HighScoresContext } from "../context/HighScoresContext"

const HighScoresPage = () => {
  const { gameOver } = React.useContext(GameContext)
  // const { fetchHighScoresData } = React.useContext(HighScoresContext)
  const [scoreState, setScoreState] = useState([])

  const fetchHighScores = async () => {
    try {
      const response = await fetch(
        "https://shrouded-refuge-51814.herokuapp.com/getscores"
      )
      const data = await response.json()
      setScoreState(data)
    } catch (error) {
      return console.log(error)
    }
  }

  useEffect(() => {
    fetchHighScores()
  }, [gameOver])

  return (
    <Wrapper>
      <h1>High Scores Global Leaderboard</h1>
      <div className="container">
        <TableHeader />
        {scoreState.length === 0 ? <h1>Loading...</h1> : null}
        {scoreState.map((singleScore, idx) => {
          return (
            <SingleHighScore key={singleScore.id} {...singleScore} idx={idx} />
          )
        })}
      </div>
      {/* <AdminButton /> */}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 10px auto;
  .container {
    box-shadow: 3px 3px 5px 1px rgb(68 68 68 / 0.4);
    display: flex;
    justify-content: start;
    min-height: 600px;
    border: 1px solid rgb(68 68 68 / 0.4);
    border-radius: 10px;
    padding: 10px 0;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%236ffc00' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E");
    h1 {
      animation: fade 1s ease-in;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      opacity: 0.1;
    }
  }
  h1 {
    margin: 0;
    color: #222;
    filter: drop-shadow(1px 1px 1px #222);
    text-align: center;
  }
  @media only screen and (min-width: 500px) {
    h1 {
      margin: 20px 0;
    }
    .container {
      margin: 0 auto;
      width: 90%;
      max-width: 550px;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`
export default HighScoresPage
