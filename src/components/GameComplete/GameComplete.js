import React from 'react'
import './GameComplete.css'
import { GameContext } from '../../context/GameContext'



const GameComplete = () => {
    const {correct} = React.useContext(GameContext)
  return (
    <div className='gameComplete'>
      <h1>Game Over</h1>
      <h3>Good Job! Try again. </h3>
      <h4>You got {correct} correct</h4>
      {/* <button onClick={()=> console.log('hello')}>Try Again</button> */}
    </div>
  )
}

export default GameComplete