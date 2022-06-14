import React from 'react'

const GameDirection = () => {
  return (
    <div className="gameDirection">
      <h2>Directions</h2>
      <ol className="directionItems">
        <li>
          Click on settings button at top to change player name, time, and math
          questions
        </li>
        <li>When Ready, click the Play Now button at top left</li>
        <li>
          Your score will increment and give you a total score of the correct
          answers minus the wrong answers
        </li>
        <li>
          You can see how well you have done by clicking the high scores button
          at the top right
        </li>
      </ol>
    </div>
  )
}

export default GameDirection