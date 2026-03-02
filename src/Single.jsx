import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const singleUrl = "http://13.235.76.33:3000/product"

const Single = () => {
    const {id}=useParams()
    const[desc,setDesc]=useState({})

    const singleHandler=async()=>{
      try{
        const fruits=await fetch(`${singleUrl}/${id}`)
        const newData=await fruits.json()
        setDesc(newData.record)
        console.log("single output",newData)
      }catch(error){
        console.log(error.message)
      }
    }
    useEffect(()=>{
      singleHandler()
    },[id])
  return (
    <div>
      <h1 >{desc.name}</h1>
      <p >{desc.desc}</p>
      <h3>{desc.price}</h3>
    </div>
  )
}

export default Single
