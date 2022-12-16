import React, { useEffect, useState } from "react"
import axios from "axios"
import { GameContext } from "./GameContext"
import { useContext } from "react"
const HighScoresContext = React.createContext()


const HighScoresContextProvider = ({ children }) => {
  const [ScoreData, setData] = useState({})
  const { gameOver } = useContext(GameContext)

  
  const fetchHighScores = async () => {
    const response = await fetch("https://shrouded-refuge-51814.herokuapp.com/getscores")
    const data = await response.json()
    setData(data)
  }

  // useEffect(() => {
  //   fetchHighScores()
  // }, [gameOver])

  console.log(ScoreData, gameOver)

  return (
    <HighScoresContext.Provider value={{ ScoreData }}>
      {children}
    </HighScoresContext.Provider>
  )
}

export { HighScoresContext, HighScoresContextProvider }

