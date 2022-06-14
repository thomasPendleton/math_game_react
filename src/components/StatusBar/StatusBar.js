import React from 'react'
import './StatusBar.style.css'

const StatusBar = ({ handleTabChange }) => {
  return (
    <>
      <div className="header">
        <div className="play_now" onClick={() => handleTabChange(2)}>
          Play Now
        </div>
        <div>Correct: 0</div>
        <div className="settings" onClick={() => handleTabChange(1)}>
          Settings
        </div>
        <div>Wrong: 0</div>
        <div className="high_scores" onClick={() => handleTabChange(3)}>
          High Scores
        </div>
      </div>
    </>
  )
}

export default StatusBar