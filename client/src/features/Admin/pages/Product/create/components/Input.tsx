"use client"
import React, { useState } from 'react'

function Input() {

    const [value, setValue] = useState("")
  return (
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setValue(e.target.value)}/><br />
        <span>You entered: {`${value.length} /20`}</span><br/>
    </div>
  )
}

export default Input