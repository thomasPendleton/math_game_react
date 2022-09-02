import React from 'react'
import './StatusBar.style.css'
import { FiSettings } from 'react-icons/fi'
import { GameContext } from '../../context/GameContext'
import CountDownTime from "../CountDownTimer/CountDownTime"

const StatusBar = ({ handleTabChange, value}) => {
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
      <header className="header">
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
            <div className='settingsText'>
              Settings
            </div>
            <FiSettings className='settingsIcon' />
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
      </header>
    </>
  )
}

export default StatusBar