import React, { useState, useEffect, useRef } from 'react'

// import { useSearchParams } from 'react-router-dom'
import './HighScores.style.css'

let options = []

const HighScores = () => {
  const [input, setInput] = useState(undefined)
  const [array, setArray] = useState([])
  const [selected, setSelected] = useState('')
  const [selectedDisplay, setSelectedDisplay] = useState('')
  const refContainer = useRef()
  const inputRef = useRef()

  const clearForm = () => {
    inputRef.current.value = ''
    setInput(undefined)
    setArray([])
    setSelectedDisplay(selected)
  }

  useEffect(() => {
    if (selected) {
      refContainer.current.disabled = false
      refContainer.current.onclick = clearForm
    }
  }, [selected])

  const generateOptions = () => {
    const index = +input
    options = []
    for (let i = 0; i < +index + 1; i++) {
      options.push(i)
    }
    setArray(...options)
  }

  useEffect(() => {
    generateOptions()
  }, [input])

  return (
    <div className="highScoreContainer">
      
      <h2>High Scores</h2>

      <input
        ref={inputRef}
        type="number"
        
        placeholder="Please type any number from 0 to 9"
        // value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        name="selected"
        id="selected"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          )
        })}
      </select>

      <span>You select number: {selectedDisplay}</span>

      <button ref={refContainer} disabled onClick={() => clearForm()}>
        Show selected option
      </button>
    </div>
  )
}

export default HighScores
