
function reducer (state, action){
    if(action.type === 'SET_PLAYER_NAME'){
        // console.log(action.payload)
        return {...state, playerName: action.payload }
    }

    if(action.type === 'SET_OPERATION'){
        // console.log(action.payload)
        return {...state, operation: action.payload }
    }

    if(action.type === 'SET_HIGH_SCORES'){
      // console.log(action.payload)

      return { ...state, highScores: action.payload }
    }

    if(action.type === 'SET_GAMETIME'){
        return {...state, gameTime: action.payload }
    }
    if (action.type === "SET_LEVEL") {
    //   console.log(action.payload)
      return { ...state, level: action.payload }
    }
    if (action.type === "SET_PLAYING") {
    //   console.log(action.payload)
      return { ...state, isPlaying: action.payload }
    }
    
    return {...state}
}


export default reducer