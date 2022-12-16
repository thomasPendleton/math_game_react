import React from 'react'
import styled from "styled-components"

const GameBox = () => {
  return (
    <div className="container">
      <Wrapper className="gameBox">
      
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: rgb(250, 198, 164);
  /* max-height: 600px; */
  width: 100%;
  max-width: 500px;
  box-shadow: 1px 1px 3px 0 rgba(189, 191, 192, 0.9);
  /* margin: 0 5px; */
`

export default GameBox
