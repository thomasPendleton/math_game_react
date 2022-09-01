import React, { useState } from 'react'
import { GameContext } from "../../context/GameContext"
import "./SettingsBox.style.css"

const SettingsBox = () => {
  const {  setPlayerName, playerName, handleOperationChange } = React.useContext(GameContext)
  const [name, setName] = useState(playerName)

  const handlePlayerSumbit = (e) => {
    e.preventDefault()
    // console.log();
    if(name){
      setPlayerName(name)
    } else {
      alert('Please enter a name')
    }
  }

  // const onNameChange = (e) => {
  //   setName(e.target.value)
  // }

  // const handleOperationChange = (e) => {
  //   console.log(e.target.value)
  //   setOperation(e.target.value)
  // }

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
              type="text"
              value={name}
              id="playerName"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </label>
        </div>
        <fieldset onChange={(e) => handleOperationChange(e)}>
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
            <input
              type="radio"
              name="math"
              id="subtract"
              value="subtraction"
            />
            Subtract
          </label>
        </fieldset>

        <fieldset>
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
          <button type="submit" value="OK" className="okBtn" onClick={() => {}}>
            OK
          </button>
        </div>
      </form>
    </div>
  )
}

export default SettingsBox
