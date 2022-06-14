import React from 'react'
import './SettingsBox.style.css'

const SettingsBox = () => {
  return (
    <div className="settingsBox">
      <h2>Settings</h2>
      <form action="submit" className="settingsForm">
        <div className="playerName">
          <label htmlFor="playerName">Player Name: </label>
          <input type="text" id="playerName" />
        </div>

        <input
          type="radio"
          name="math"
          id="multiplcation"
          value="mulitplcation"
          defaultChecked
        />
        <label htmlFor="multiplcation">Multiplcation</label>

        <input
          type="radio"
          name="math"
          id="add/subtract"
          value="add/subtract"
        />
        <label htmlFor="add/subtract">Add/Subtract</label>
        <br />
        <input type="radio" name="time" id="90" value="90" defaultChecked />
        <label htmlFor="90">90 seconds</label>
        <input type="radio" name="time" id="180" value="180" />
        <label htmlFor="180">180 seconds</label>

        <br />
        <div className="btnContainer">
          <input type="submit" value="OK" className="okBtn" onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default SettingsBox
