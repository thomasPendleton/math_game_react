
function reducer (state, action){
    if (action.type === "SET_PLAYER_NAME") {
      return { ...state, playerName: action.payload }
    }

    if (action.type === "SET_OPERATION") {
      return { ...state, operation: action.payload }
    }

    if (action.type === "SET_HIGH_SCORES") {
      return { ...state, highScores: action.payload }
    }

    if (action.type === "SET_GAMETIME") {
      return { ...state, gameTime: action.payload }
    }

    if (action.type === "SET_LEVEL") {
      return { ...state, level: action.payload }
    }


    if (action.type === "SET_PLAYING") {
      return { ...state, isPlaying: action.payload }
    }
    
    if (action.type === "SET_GAMEOVER") {
      return { ...state, gameOver: action.payload }
    }

    if (action.type === "SET_CORRECT") {
      return { ...state, correct: action.payload }
    }
    
    return {...state}
}


export default reducer