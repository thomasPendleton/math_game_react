import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FiSettings } from "react-icons/fi"
import { GameContext } from "../context/GameContext"
import CountDownTime from "./CountDownTime"

const StatusBar = () => {
  let navigate = useNavigate()
  const {
    correct,
    wrong,
    gameOverReducer,
    setGameTimeReducer,
    setIsPlayingReducer,
    gameTime,
    gameOver,
    setCorrectReducer,
    setWrong,
    isPlaying,
    playerName,
    setAnsweredWrong,
  } = React.useContext(GameContext)

  const handlePlaying = () => {
    if (playerName) {
      setAnsweredWrong([])
      setCorrectReducer(0)
      setWrong(0)
      gameOverReducer(false)
      setGameTimeReducer(gameTime)
      setIsPlayingReducer(true)
      navigate("/play")
    }
  }
  return (
    <>
      <Wrapper className="header">
        <div
          className={isPlaying || !playerName ? "play_now disabled" : "play_now"}
          onClick={handlePlaying}
        >
          Play Now
        </div>
        <div>Correct: {correct}</div>

        {isPlaying && !gameOver ? (
          <CountDownTime />
        ) : (
          <NavLink className="settings" to="/settings">
            <div className="settingsText">Settings</div>
            <FiSettings className="settingsIcon" />
          </NavLink>
        )}

        <div>Wrong: {wrong}</div>

        <NavLink
          to="/highscores"
          className={isPlaying ? "high_scores disabled" : "high_scores"}
        >
          High Scores
        </NavLink>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  background-color: #ff4500;
  /* background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #ff4500 100%); */

  display: flex;
  justify-content: space-around;
  padding: 40px 5px;
  border-bottom: 2px solid #333;
  font-size: 24px;
  div {
    padding: 0 5px;
  }
  .play_now {
    cursor: pointer;
    border-radius: 5px;
  }

  .high_scores {
    cursor: pointer;
  }

  .settings {
    cursor: pointer;
    padding: 0;
  }
  .settingsIcon {
    display: none;
  }
  .disabled {
    color: rgba(48, 48, 48, 0.845);
    filter: blur(1px);
    cursor: not-allowed;
    pointer-events: none;
  }

  @media only screen and (max-width: 680px) {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 20px 0 20px;
    text-align: center;

    .settings .settingsIcon {
      display: block;
      margin-top: 5px;
      transition: transform 1s ease;
    }
    .settingsText {
      display: none;
    }
    .settings .settingsIcon:hover {
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 450px) {
    .settings .settingsIcon {
      display: block;
      margin-top: 5px;
    }
  }
`

export default StatusBar
