import React, { useState } from 'react'

const Form = () => {
    const[sName,setSName]=useState("")
    const[sEmail,setSEmail]=useState("")
    const[sCity,setSCity]=useState("")
    const[sContact,setSContact]=useState("")

    const studentHandler = (event)=>{
        event.preventDefault()
        console.log("list of student details", sName, sEmail, sCity, sContact)   
    }

  return (
    <div>
      <form className="box" onSubmit={studentHandler}>
        <div className="user">
            <h4>Student Name</h4>
            <input type="text" value={sName} onChange={(e)=>setSName(e.target.value)}/>
        </div>
        <div className="user">
            <h4>Student Email</h4>
            <input type="email" value={sEmail} onChange={(e)=>setSEmail(e.target.value)}/>
        </div>
        <div className="user">
            <h4>Student city</h4>
            <input type="text" value={sCity} onChange={(e)=>setSCity(e.target.value)}/>
        </div>
        <div className="user">
            <h4>Student contact</h4>
            <input type="number" value={sContact} onChange={(e)=>setSContact(e.target.value)} />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
