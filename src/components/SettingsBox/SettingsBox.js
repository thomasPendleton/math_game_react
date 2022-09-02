import React, { useState, useRef, useEffect } from "react"
import { GameContext } from "../../context/GameContext"
import "./SettingsBox.style.css"

const SettingsBox = ({handleTabChange}) => {
  const { setPlayerName, playerName, setGameTime, setOperation } =
    React.useContext(GameContext)
  const [name, setName] = useState(playerName)
  const nameRef = useRef()
  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const handlePlayerSumbit = (e) => {
    e.preventDefault()
    if (name) {
      setPlayerName(name)
      handleTabChange(0)
    } else {
      alert("Please enter a name")
    }
  }

  return (
    <div className="settingsBox">
      <h2>Settings</h2>
      <form
        action="submit"
        className="settingsForm"
        onSubmit={handlePlayerSumbit}
      >
        <div className="playerName">
          <label htmlFor="playerName">
            Player Name:
            <input
              ref={nameRef}
              type="text"
              value={name}
              id="playerName"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </label>
        </div>
        <fieldset onChange={(e) => setOperation(e.target.value)}>
          <label htmlFor="multiplication">
            <input
              type="radio"
              name="math"
              id="multiplication"
              value="multiplication"
              defaultChecked
            />
            Multiplcation
          </label>
          <label htmlFor="subtract">
            <input type="radio" name="math" id="subtract" value="subtraction" />
            Subtract
          </label>
        </fieldset>

        <fieldset onChange={(e) => setGameTime(e.target.value)}>
          <label htmlFor="90">
            <input type="radio" name="time" id="90" value="90" defaultChecked />
            90 seconds
          </label>
          <label htmlFor="180">
            <input type="radio" name="time" id="180" value="180" />
            180 seconds
          </label>
        </fieldset>

        <div className="btnContainer">
          <button type="submit" value="OK" className="okBtn" >
            OK
          </button>
        </div>
      </form>
    </div>
  )
}

export default SettingsBox
