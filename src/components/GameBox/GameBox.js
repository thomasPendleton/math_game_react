import React, { useState } from 'react'
import './GameBox.style.css'
import GameDirection from '../GameDirection/GameDirection'
import SettingsBox from '../SettingsBox/SettingsBox'
import HighScores from '../HighScores/HighScores'
import PlayNow from '../PlayNow/PlayNow'

const GameBox = ({ value }) => {
  return (
    <div className="container">
      <div className="gameBox">
        {value === 0 && <GameDirection />}
        {value === 1 && <SettingsBox />}
        {value === 2 && <PlayNow /> }
        {value === 3 && <HighScores /> }
      </div>
    </div>
  )
}

export default GameBox
