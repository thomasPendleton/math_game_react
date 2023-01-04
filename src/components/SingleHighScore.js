import React, { useState } from "react"
import styled from "styled-components"
import { FaCrown } from "react-icons/fa"
import { MdRemoveCircle } from "react-icons/md"

const SingleHighScore = ({
  id,
  name,
  gametime,
  score,
  operator,
  level,
  missed,
  date,
  idx,
  loggedIn,
  removeScores,
  setRemoveScores,
}) => {
  const [clicked, setClicked] = useState(false)
  const dateData = new Date(date)

  const handleRemove = (id) => {
    if (!removeScores.includes(id)) {
      setRemoveScores((prev) => [...prev, id])
    } else {
      setRemoveScores(prev => [...prev].filter(item => item !== id ))
    }
    setClicked(!clicked)
  }

  return (
    <Wrapper>
      {loggedIn ? (
        <MdRemoveCircle className="remove" onClick={() => handleRemove(id)} />
      ) : null}
      {idx === 0 ? <FaCrown className="crown" /> : null}

      <h4 className={clicked ? "remove-me" : null}>{idx + 1}. </h4>
      <h4 className={clicked ? "remove-me" : null}>{name}</h4>
      <h4 className={clicked ? "remove-me" : null}>{score}</h4>
      <h4 className={clicked ? "remove-me level" : "level"}>
        {level ? level : "Easy"}
      </h4>
      <h4 className={clicked ? "remove-me" : null}>{gametime}</h4>
      <h4 className={clicked ? "remove-me" : null}>
        {operator === "multiplication" ? "Multiply" : "Subtract"}
      </h4>
      <h4 className={clicked ? "remove-me wrong" : "wrong"}>{missed}</h4>
      <h4 className={clicked ? "remove-me date" : "date"}>
        {dateData.toLocaleDateString()}
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: relative;
  font-size: 0.8rem;
  width: 96%;
  margin: 5px 0;
  display: grid;
  padding: 0px 5px;
  border: 1px solid rgb(68 68 68 / 0.4);
  border-radius: 5px;
  background-color: white;
  box-shadow: 3px 3px 6px 1px rgb(68 68 68 / 0.3);
  svg.remove {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: red;
    cursor: pointer;
    font-size: 1.2rem;
  }
  svg.crown {
    font-size: 1.3rem;
    animation: wiggle 2.5s ease infinite;
    position: absolute;
    top: -8px;
    left: 3px;
    color: #ffd700;
  }
  .date,
  .wrong {
    display: none;
  }
  grid-template-columns: 25px 1fr 38px 38px 38px 60px;
  h4 {
    text-align: center;
    padding: 5px 0;
    margin: 0;
  }
  .level {
    text-transform: capitalize;
  }
  .remove-me {
    color: #8b0000;
    text-decoration: line-through;
  }

  @media only screen and (min-width: 500px) {
    font-size: 1rem;
    .date,
    .wrong {
      display: grid;
    }
    grid-template-columns: 30px 1fr 40px 45px 40px 80px 40px 100px;
    svg.remove {
      position: absolute;
      top: 50%;
      left: -40px;
      transform: translateY(-50%);
      color: red;
      cursor: pointer;
      font-size: 1.4rem;
    }
  }
  @keyframes wiggle {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    85% {
      transform: rotate(-12deg);
    }
    95% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(-20deg);
    }
  }
  @keyframes wiggle2 {
    0% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(-10deg);
    }

    100% {
      transform: rotate(-20deg);
    }
  }
`
export default SingleHighScore
