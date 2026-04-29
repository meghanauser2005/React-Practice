import React, { useEffect, useState } from 'react'
import { java_api } from './Api'


const Demodata = () => {
    const [showData,setShowData]=useState([])
    const dataHandler=async () => {

    try {
        const response=await fetch(java_api)
        const newdata=await response.json()
        console.log(newdata)
        setShowData(newdata)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
dataHandler()
},[])

  return (
    <div>
      <h2>checking data</h2>
      {showData.map((item)=>{
        return(
            <div className="" key={item.id}>
                <h1>{item.name}</h1>
                
            </div>
        )
      })}
    </div>
  )
}

export default Demodata
