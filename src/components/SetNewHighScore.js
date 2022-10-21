import React, { useEffect, useState } from "react"

const SetNewHighScore = ( {addScore} ) => {
  
  return (
    <div>
      <button type="button" onClick={addScore}>
        set high score
      </button>
    </div>
  )
}

export default SetNewHighScore
