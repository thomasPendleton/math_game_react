import React from "react"
import styled from "styled-components"
const TableHeader = () => {
  return (
    <Wrapper>
      <h5>Rank</h5>
      <h5>Player</h5>
      <h5>Score</h5>
      <h5>Level</h5>
      <h5>Time</h5>
      <h5>Operator</h5>
      <h5 className="wrong">Wrong</h5>
      <h5 className="date">Date</h5>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-size: 0.8rem;
  width: 98%;
  display: grid;
  padding: 0px 5px;
  margin: 0 auto;
  text-align: center;
  
  .date, .wrong { 
      display: none;
    }
    /* grid-gap: 5px; */
    grid-template-columns: 25px 1fr 38px 38px 38px 60px;
    h5 {

    margin: 10px 0;
  }
  @media only screen and (min-width: 500px) {
    .date, .wrong { 
        display: grid;
    }
    font-size: 1rem;
    grid-template-columns: 30px 1fr 40px 45px 40px 80px 40px 100px;
    text-align: center;
  }
`
export default TableHeader
