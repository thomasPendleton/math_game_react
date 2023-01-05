import React, {useState} from "react"
import styled from "styled-components"
const AdminLogin = ({ setAdminMode, adminMode, setLoggedIn, loggedIn }) => {
  const [value, setValue] = useState("")
//   console.log(adminMode)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === "123") {
    //   console.log("enter")
      setLoggedIn(true)
      setValue("")
    }
  }
  if (adminMode && !loggedIn) {
    return (
      <Wrapper>
        {/* X emblem to close form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="admin">Admin Login:</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            value={value}
            type="text"
            id="admin"
          />
        </form>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  padding: 20px;
  /* width: 250px; */
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: #fefefe;
  border: 1px solid #222;
`
export default AdminLogin
