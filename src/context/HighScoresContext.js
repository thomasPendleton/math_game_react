import React, { useEffect, useState } from "react"
import { GameContext } from "./GameContext"
import { useContext } from "react"
const HighScoresContext = React.createContext()

const HighScoresContextProvider = ({ children }) => {
  const [ScoreData, setData] = useState({})
  const { gameOver } = useContext(GameContext)

  const fetchHighScoresData = async () => {
    try {
      const response = await fetch(
        "https://shrouded-refuge-51814.herokuapp.com/getscores"
      )
      const data = await response.json()
      setData(data)
    } catch (error) {
      return console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchHighScores()
  // }, [gameOver])

  return (
    <HighScoresContext.Provider value={{ ScoreData, fetchHighScoresData }}>
      {children}
    </HighScoresContext.Provider>
  )
}

export { HighScoresContext, HighScoresContextProvider }

