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
      <h4>{gametime}</h4>
      <h4 className="level">{level ? level : 'Easy'}</h4>
      <h4>{operator === "multiplication" ? "Multiply" : "Subtract"}</h4>
      <h4>{missed}</h4>
      <h4>{dateData.toLocaleDateString()}</h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-size: 0.8rem;
  width: 98%;
  display: grid;
  padding: 0px 5px;

  /* grid-gap: 5px; */
  grid-template-columns: 25px 1fr 28px 28px 35px 60px 20px 1fr;
  h4 {
    margin: 10px 0;
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
    grid-template-columns: 30px 1fr 30px 30px 40px 75px 20px 100px;
  }
`
export default SingleHighScore
