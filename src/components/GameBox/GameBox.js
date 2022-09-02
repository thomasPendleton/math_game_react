import React from 'react'
import GameComplete from "../GameComplete/GameComplete"
import GameDirection from "../GameDirection/GameDirection"
import SettingsBox from "../SettingsBox/SettingsBox"
import HighScores from "../HighScores/HighScores"
import PlayNow from "../PlayNow/PlayNow"
import { GameContext } from "../../context/GameContext"

const GameBox = ({ value, handleTabChange }) => {
  const { gameOver } = React.useContext(GameContext)
  return (
    <div className="container">
      <div className="gameBox">
        {value === 0 && <GameDirection />}
        {value === 1 && <SettingsBox handleTabChange={handleTabChange}/>}
        {value === 2 && gameOver && <GameComplete />}
        {value === 2 && !gameOver && <PlayNow />}
        {value === 3 && <HighScores />}
      </div>
    </div>
  )
}

export default GameBox
