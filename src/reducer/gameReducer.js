
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
      
        const sortedPayload = action.payload.sort((a, b) => {
            return b.correct - a.correct
        })
        return {...state, highScores: sortedPayload}
    }


    //change to new action type
    if(action.type === 'SET_GAMETIME'){
        // console.log(action.payload)
        return {...state, gameTime: action.payload }
    }
    
    return {...state}
}


export default reducer