import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"
import { GameContext } from "../../context/GameContext"

const HighScores = () => {
  const { playerName } = React.useContext(GameContext)

  return (
    <Wrapper>
      <h2>High Scores</h2>
      <h1>Sorry {playerName && playerName}, this section is not ready.</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 26px;
  /* Remove min width later when data is added */
  /* min-width: 350px; */
`

export default HighScores
