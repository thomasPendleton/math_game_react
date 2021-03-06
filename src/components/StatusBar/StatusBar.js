import React from 'react'
import './StatusBar.style.css'

const StatusBar = ({ handleTabChange, correct, wrong }) => {
  return (
    <>
      <div className="header">
        <div className="play_now" onClick={() => handleTabChange(2)}>
          Play Now
        </div>
        <div>Correct: {correct}</div>
        <div className="settings" onClick={() => handleTabChange(1)}>
          Settings
        </div>
        <div>Wrong: {wrong}</div>
        <div className="high_scores" onClick={() => handleTabChange(3)}>
          High Scores
        </div>
      </div>
    </>
  )
}

export default StatusBar