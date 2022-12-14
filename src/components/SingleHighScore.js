import React from "react"
import styled from "styled-components"
const SingleHighScore = (singleScore) => {
    const { id, name, gametime, score, operator, level, missed, date } =
    singleScore
  return (
    <Wrapper>
        <div className="">
          <h4>
            name: {name} | score: {score}
          </h4>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


`
export default SingleHighScore
