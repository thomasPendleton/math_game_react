import React from 'react'
import styled from "styled-components"

const GameDirection = () => {
  return (
    <Wrapper>
      <h2>Directions</h2>
      <ol className="directionItems">
        <li>
          Click on settings button at top to change player name, time, and math
          questions. Click the <b>OK</b> button.
        </li>
        <li>When Ready, click the <b>Play Now</b> button at top left.</li>
        <li>
          Your score will increment and give you a total score of the correct
          answers. It will also keep track of the wrong answers.
        </li>
        <li>
          You can see how well you have done by clicking the high scores button
          at the top right. Once you have done this you can see the scores of your friends by clicking the 
          Global high scores tab.
        </li>

      </ol>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 90%;
  h2 {
    text-align: center;
    font-size: 40px;
    text-decoration: underline;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
  }
  .directionItems {
    padding: 0 20px;
    margin: 0 0 20px;
    li {
      padding: 15px 0;
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
