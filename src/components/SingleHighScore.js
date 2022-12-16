import React from "react"
import styled from "styled-components"
import { FaCrown } from "react-icons/fa"

const SingleHighScore = (singleScore) => {
  const { name, gametime, score, operator, level, missed, date, idx } =
    singleScore
  const dateData = new Date(date)

  return (
    <Wrapper>
      {idx === 0 ? <FaCrown /> : null}

      <h4>{idx + 1}. </h4>
      <h4>{name}</h4>
      <h4>{score}</h4>
      <h4 className="level">{level ? level : "Easy"}</h4>
      <h4>{gametime}</h4>
      <h4>{operator === "multiplication" ? "Multiply" : "Subtract"}</h4>
      <h4 className="wrong">{missed}</h4>
      <h4 className="date">{dateData.toLocaleDateString()}</h4>
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
  svg {
    font-size: 1.3rem;
    animation: wiggle 2.5s ease infinite;
    position: absolute;
    top: -8px;
    left: 3px;
    color: #FFD700;
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

  @media only screen and (min-width: 500px) {
    font-size: 1rem;
    .date,
    .wrong {
      display: grid;
    }
    grid-template-columns: 30px 1fr 40px 45px 40px 80px 40px 100px;
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
