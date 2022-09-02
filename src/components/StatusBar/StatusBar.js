import React from 'react'
import './StatusBar.style.css'
import { GameContext } from '../../context/GameContext'
import CountDownTime from "../CountDownTimer/CountDownTime"

const StatusBar = ({ handleTabChange, value, playerName }) => {
  const {
    correct,
    wrong,
    setGameOver,
    setGameTime,
    gameTime,
    gameOver,
    setCorrect,
    setWrong,
  } = React.useContext(GameContext)

  return (
    <>
      <div className="header">
        
        <div
          className={'play_now'}
          onClick={() => {
            setCorrect(0)
            setWrong(0)
            handleTabChange(2)
            setGameOver(false)
            setGameTime(gameTime)
          }}
        >
          Play Now
        </div>
        <div>Correct: {correct}</div>

        {value === 2 && !gameOver ? (
          <CountDownTime />
        ) : (
          <div className="settings" onClick={() => handleTabChange(1)}>
            Settings
          </div>
        )}

        <div>Wrong: {wrong}</div>
        <div className="high_scores" onClick={() => handleTabChange(3)}>
          High Scores
        </div>
      </div>
    </>
  )
}

export default StatusBar