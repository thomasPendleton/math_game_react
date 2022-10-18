import React from 'react'
import styled from "styled-components"

const GameDirection = () => {
  return (
    <Wrapper className="gameDirection">
      <h2>Directions</h2>
      <ol className="directionItems">
        <li>
          Click on settings button at top to change player name, time, and math
          questions. Click the OK button.
        </li>
        <li>When Ready, click the Play Now button at top left.</li>
        <li>
          Your score will increment and give you a total score of the correct
          answers.
        </li>
        <li>
          You can see how well you have done by clicking the high scores button
          at the top right.
        </li>
      </ol>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 40px;
    text-decoration: underline;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
  }
  .directionItems {
    padding: 0 50px;
    margin: 0 0 20px;
    li {
      padding: 20px 0;
    }
  }

  @media only screen and (max-width: 680px) {
    h2 {
      margin-bottom: 0px;
    }
    .directionItems {
      margin-top: 5px;
    }
  }
`

export default GameDirection
