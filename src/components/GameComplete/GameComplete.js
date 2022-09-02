import React from 'react'
import './GameComplete.css'
import { GameContext } from '../../context/GameContext'



const GameComplete = () => {
    const {correct, gameTime, playerName} = React.useContext(GameContext)
  return (
    <div className='gameComplete'>
      <h1>Time is up!</h1>
      <h3>Good Job {playerName}!</h3>
      <h4>You got {correct} correct in {gameTime} s</h4>
      <h4> Try again </h4>
      {/* <button onClick={()=> console.log('hello')}>Try Again</button> */}
    </div>
  )
}

export default GameComplete