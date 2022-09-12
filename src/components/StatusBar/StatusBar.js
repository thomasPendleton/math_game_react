import React from 'react'
import styled from "styled-components"
import { FiSettings } from "react-icons/fi"
import { GameContext } from "../../context/GameContext"
import CountDownTime from "../CountDownTimer/CountDownTime"

const StatusBar = ({ handleTabChange, value }) => {
  const {
    correct,
    wrong,
    setGameOver,
    setGameTime,
    gameTime,
    gameOver,
    setCorrect,
    setWrong,
    playing,
    setPlaying,
    playerName,
  } = React.useContext(GameContext)

  const handlePlaying = () => {
    if (playerName) {
      setCorrect(0)
      setWrong(0)
      handleTabChange(2)
      setGameOver(false)
      setGameTime(gameTime)
      setPlaying(true)
    }
  }

  return (
    <>
      <Wrapper className="header">
        <div
          className={playing || !playerName ? "play_now disabled" : "play_now"}
          onClick={handlePlaying}
        >
          Play Now
        </div>
        <div>Correct: {correct}</div>

        {value === 2 && !gameOver ? (
          <CountDownTime />
        ) : (
          <div className="settings" onClick={() => handleTabChange(1)}>
            <div className="settingsText">Settings</div>
            <FiSettings className="settingsIcon" />
          </div>
        )}

        <div>Wrong: {wrong}</div>
        <div
          className={playing ? "high_scores disabled" : "high_scores"}
          onClick={() => {
            if (!playing) {
              handleTabChange(3)
            }
          }}
        >
          High Scores
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  background-color: orangered;
  display: flex;
  justify-content: space-around;
  padding: 40px 5px;
  border-bottom: 2px solid black;
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
    cursor: default;
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