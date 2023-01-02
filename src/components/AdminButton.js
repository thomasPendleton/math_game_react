import React from "react"
import styled from "styled-components"
import AdminLogin from "./AdminLogin"
const AdminButton = () => {
  const handleClick = () => {
    console.log("clicky")
  }
  return (
    <Wrapper onClick={handleClick}>
      <AdminLogin />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: red;
  height: 40px;
  width: 80px;
`
export default AdminButton
