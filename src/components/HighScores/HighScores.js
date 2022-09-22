import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"
import { GameContext } from "../../context/GameContext"

const HighScores = () => {
  const { highScores } = React.useContext(GameContext)
  const [filteredScores, setFilteredScores] = useState(highScores)

  const filterHighScores = (operation) => {
    setFilteredScores(highScores)
    setFilteredScores(
      highScores
        .filter((item) => {
          return item.operation === operation
        })
        .filter((item, idx) => {
          // console.log(idx)
          return idx < 7
        })
    )
  }

  useEffect(() => {
    const filteredScores = highScores.filter((item) => {
      return item
    }).filter((item, idx) => {
      return idx < 7

    })
    setFilteredScores(filteredScores)
  }, [])

  return (
    <Wrapper>
      <h2>High Scores</h2>
      <div className="btn-container">
        <button
          className="okBtn"
          onClick={() => filterHighScores("subtraction")}
        >
          Subtraction
        </button>
        <button
          className="okBtn"
          onClick={() => filterHighScores("multiplication")}
        >
          Multiplication
        </button>
      </div>
      <div className="table-head">
        <h5>Name</h5>
        <h5>Score</h5>
        <h5>Operation</h5>
        <h5>Time</h5>
      </div>
      {filteredScores.map((item, idx) => {
        const { playerName, operation, correct, gameTime } = item
        return (
          <section className="table-data" key={idx}>
            <p>{playerName}</p>
            <p>{correct}</p>
            <p className="operation">{operation}</p>
            <p>{gameTime}</p>
          </section>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 26px;
  /* Remove min width later when data is added */
  /* min-width: 350px; */
  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .table-head {
    display: grid;
    grid-template-columns: 30% 20% 30% 20%;
    border-bottom: 1px solid black;
    h5 {
      margin-bottom: 10px;
    }
  }
  .table-data {
    display: grid;
    grid-template-columns: 30% 20% 30% 20%;
    p {
      margin: 10px 0;
    }
  }
  .btn-container {
    .okBtn {
      margin: 0 5px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      background-color: rgb(252, 87, 26);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      opacity: 1;
      transition: transform 0.3s ease;
      transition: opacity 0.3s ease;
      font-size: 20px;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transition: box-shadow 0.1s;
        transform: translateY(4px);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`

export default HighScores
