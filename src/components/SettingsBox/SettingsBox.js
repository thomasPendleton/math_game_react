import React, { useState } from 'react'
import './SettingsBox.style.css'

const SettingsBox = ({ player }) => {
  const [name, setName] = useState('')

  const handlePlayerSumbit = (e) => {
    e.preventDefault()
    player(name)
  }

  const onNameChange = (e) => {
    setName(e.target.value)
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
              type="text"
              id="playerName"
              onChange={(e) => {
                onNameChange(e)
              }}
            />
          </label>
        </div>
        <fieldset>
          <label htmlFor="multiplcation">
          <input
            type="radio"
            name="math"
            id="multiplcation"
            value="mulitplcation"
            defaultChecked
          />
          Multiplcation
        </label>
        <label htmlFor="add/subtract">
          <input
            type="radio"
            name="math"
            id="add/subtract"
            value="add/subtract"
          />
          Add/Subtract
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
          <button
            type="submit"
            value="OK"
            className="okBtn"
            onClick={() => {}}
          >OK</button>
        </div>
      </form>
    </div>
  )
}

export default SettingsBox
