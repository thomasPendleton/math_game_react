import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { GameContext } from "../context/GameContext"
import { toast } from 'react-toastify';


const SettingsBox = ({ handleTabChange }) => {
  const {
    playerName,
    setGameTime,
    setOperationReducer,
    operation,
    setPlayerNameReducer,
    gameTime,
    setLevelReducer,
    level,
  } = React.useContext(GameContext)
  const [name, setName] = useState(playerName)
  const nameRef = useRef()

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const handlePlayerSumbit = (e) => {
    e.preventDefault()
    if (name && gameTime && operation) {
      setPlayerNameReducer(name)
      handleTabChange(0)
    } else if (name === "") {
      toast.error("Please enter a name")
    } else if (operation === "") {
      toast.error("Please enter an operation")
    } else if (gameTime === null) {
      toast.error("Please enter a game time")
    }
  }

  return (
    <Wrapper>
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
              maxLength="10"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </label>
        </div>
        <fieldset>
          <label htmlFor="multiplication" className="multi">
            <input
              onChange={(e) => setOperationReducer(e.target.value)}
              type="radio"
              name="math"
              id="multiplication"
              value="multiplication"
              checked={operation === "multiplication" && true}
            />
            Multiplication
          </label>

          {operation === "multiplication" && (
            <>
              <br />
              <label className="level" htmlFor="easy">
                <input
                  onChange={(e) => setLevelReducer(e.target.value)}
                  type="radio"
                  name="level"
                  id="easy"
                  value="easy"
                  checked={level === "easy" && true}
                />
                easy
              </label>
              <label className="level" htmlFor="hard">
                <input
                  onChange={(e) => setLevelReducer(e.target.value)}
                  type="radio"
                  name="level"
                  id="hard"
                  value="hard"
                  checked={level === "hard" && true}
                />
                hard
              </label>
            </>
          )}

          <br />
          <label htmlFor="subtract">
            <input
              onChange={(e) => {
                setOperationReducer(e.target.value)
                setLevelReducer("")
              }}
              checked={operation === "subtraction" && true}
              type="radio"
              name="math"
              id="subtract"
              value="subtraction"
            />
            Subtraction
          </label>
        </fieldset>

        <fieldset onChange={(e) => setGameTime(e.target.value)}>
          <label htmlFor="45">
            <input
              onChange={(e) => setGameTime(e.target.value)}
              checked={gameTime === "45" && true}
              type="radio"
              name="time"
              id="45"
              value="45"
            />
            45 seconds
          </label>
          <br />
          <label htmlFor="90">
            <input
              onChange={(e) => setGameTime(e.target.value)}
              checked={gameTime === "90" && true}
              type="radio"
              name="time"
              id="90"
              value="90"
            />
            90 seconds
          </label>
        </fieldset>

        <div className="btnContainer">
          <button type="submit" value="OK" className="okBtn">
            OK
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  accent-color: rgb(252, 87, 26);
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  h2 {
    margin: 20px 0 10px;
  }
  fieldset {
    border: none;
  }
  .settingsForm {
    font-size: 26px;
    div {
      margin: 10px;
    }
    input {
      box-shadow: inset 1px 1px 3px 0 rgba(189, 191, 192, 0.9);
      text-align: center;
      border-radius: 5px;
      font-size: 24px;
      margin: 10px 10px;
    }
    label {
      cursor: pointer;
      padding: 0 10px;
    }
    .multi {
      input {
        margin-bottom: 0;
      }
    }
  }
  .level {
    font-size: 1.4rem;
    input {
      margin-bottom: 20px;
    }
  }
  .okBtn {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(252, 87, 26);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: transform 0.3s ease;
    transition: opacity 0.3s ease;
    font-size: 24px;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transition: box-shadow 0.1s;
      transform: translateY(4px);
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }
  }

  .playerName input {
    max-width: 100%;
  }

  .btnContainer {
    padding-top: 20px;
  }

  @media only screen and (max-width: 450px) {
    h2 {
      font-size: 2.4rem;
      margin-top: 5px;
    }
    label {
      font-size: 1.4rem;
    }

    .playerName {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .playerName input {
      margin: 0 0;
    }
    .btnContainer {
      margin-top: 0;
      padding-top: 12px;
    }
  }
`


export default SettingsBox
