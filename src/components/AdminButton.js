import React from "react"
import styled from "styled-components"



const AdminButton = ({
  setAdminMode,
  adminMode,
  loggedIn,
  setLoggedIn,
  modifyHighScores,
  setRemoveScores,
  removeScores,
}) => {
  const handleClick = () => {
    console.log("clicky")
    setAdminMode(!adminMode)
    if (loggedIn && removeScores.length > 0) {
      // Make call to backend here to remove the ids that are checked
      modifyHighScores(removeScores)
      setRemoveScores([])
    }
    setLoggedIn(false)
  }

  //   console.log(adminMode)
  return (
    <Wrapper onClick={() => handleClick()}>
      {loggedIn ? <p>Remove ?</p> : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  /* background-color: red; */
  height: 40px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    cursor: default;
    margin: 0;
  }
`
export default AdminButton
