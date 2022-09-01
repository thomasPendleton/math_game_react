import React, { useState, useEffect, useRef } from 'react'
import { GameContext } from '../../context/GameContext'


import './HighScores.style.css'



const HighScores = () => {
  const { playerName } = React.useContext(GameContext)

  return (
    <div className="highScoreContainer">
      
      <h2>High Scores</h2>
      <h1>Sorry {playerName && playerName }, this section is not ready.</h1>
     

     
    

    
    </div>
  )
}

export default HighScores
