import React, { useState } from 'react'

import GameDirection from '../GameDirection/GameDirection'
import SettingsBox from '../SettingsBox/SettingsBox'
import HighScores from '../HighScores/HighScores'
import PlayNow from '../PlayNow/PlayNow'

const GameBox = ({ value, firstNumber, secondNumber, player }) => {
  return (
    <div className="container">
      <div className="gameBox">
        {value === 0 && <GameDirection />}
        {value === 1 && <SettingsBox player={player} />}
        {value === 2 && <PlayNow firstNumber={firstNumber} secondNumber={secondNumber} /> }
        {value === 3 && <HighScores /> }
      </div>
    </div>
  )
}

export default GameBox
