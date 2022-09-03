import React from 'react'
import './GameComplete.css'
import { GameContext } from '../../context/GameContext'



const GameComplete = () => {
    const {correct, gameTime, playerName} = React.useContext(GameContext)
  return (
    <div className='gameComplete'>
      <h2>Time is up!</h2>
      <h3>Good Job {playerName}!</h3>
      <h4>You got {correct} correct<br/> in {gameTime}s</h4>
      <h4></h4>
      <h4> Try again  </h4>
      
    </div>
  )
}

export default GameComplete