import React, { useState } from 'react'

const States = () => {
    const[myName,setMyName]=useState("Meghana")
    const Handle = () =>{
        setMyName("Gnana")
    }
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={Handle}>change</button>
    </div>
  )
}

export default States
