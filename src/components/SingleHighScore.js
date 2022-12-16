import React from "react"
import styled from "styled-components"
const SingleHighScore = (singleScore) => {
  const { id, name, gametime, score, operator, level, missed, date, idx } =
    singleScore
  const dateData = new Date(date)

  return (
    <Wrapper>
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
  font-size: 0.8rem;
  width: 98%;
  display: grid;
  padding: 0px 5px;
  .date,
  .wrong {
    display: none;
  }
  /* grid-gap: 5px; */
  grid-template-columns: 25px 1fr 38px 38px 38px 60px;
  h4 {
    text-align: center;
    padding: 5px 0;
    margin: 0;
    border: 1px solid black;
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
`
export default SingleHighScore
