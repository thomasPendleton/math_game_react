import React, { useEffect, useState } from "react"
import axios from "axios"
import SetNewHighScore from "../components/SetNewHighScore"

const HighScoresContext = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/players")
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(error, "error"))
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/players")
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error, "error"))
  }, [])

  const addData = async (e) => {
    // console.log(modifiedData)
    e.preventDefault()
    await axios
      .post("http://localhost:1337/api/players", {
        data: {
          name: "Mari",
          operation: "subtraction",
          correct: 12,
          gameTime: 45,
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (data.length > 0) {
    return (
      <div>
        {data.map((item) => {
          const {
            id,
            attributes: { name, operation },
          } = item
          return (
            <h1 key={id}>
              {name} {operation}
            </h1>
          )
        })}
        <SetNewHighScore addScore={addData} />
      </div>
    )
  }
  return <h1>no data</h1>
}

export default HighScoresContext
