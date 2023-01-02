import React, {useState} from "react"
import styled from "styled-components"
const AdminLogin = () => {
    const [value, setValue] = useState('')
    const [adminMode, setAdminMode] = useState(false)
    
    const handleChange = (e) => { 
        setValue(e.target.value)
     }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(value === '123'){
            console.log('enter')
            setValue('')
        }
    }
  return (
    <Wrapper>
      {/* X emblem to close form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="admin">Admin Login:</label>
        <input onChange={(e) => handleChange(e)} value={value} type="text" id="admin" />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 300px;
  background-color: yellow;
`
export default AdminLogin
