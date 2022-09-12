import React from 'react'
import styled from "styled-components"
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
      <Wrapper className="gameBox">
        {value === 0 && <GameDirection />}
        {value === 1 && <SettingsBox handleTabChange={handleTabChange} />}
        {value === 2 && gameOver && <GameComplete />}
        {value === 2 && !gameOver && <PlayNow />}
        {value === 3 && <HighScores />}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: rgb(250, 198, 164);
  max-height: 600px;
  width: 100%;
  max-width: 500px;
  box-shadow: 1px 1px 3px 0 rgba(189, 191, 192, 0.9);
  /* margin: 0 5px; */
`

export default GameBox
