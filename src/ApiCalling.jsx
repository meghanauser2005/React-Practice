// import { useEffect } from "react"
import React, { useState,useEffect } from 'react'

const apiUrl="http://13.235.76.33:3000/product/all-products"
const ApiCalling = () => {
    const[appl,setAppl]=useState([])

    const dataHandler = async () => {
        try{
            const response = await fetch(apiUrl)
            const friday = await response.json()
            console.log(friday)
            setAppl(friday.products)
        }catch(error){
            console.log(error.message)
        }
    }


    useEffect(()=>{
        dataHandler()
        // console.log("checking api data",appl)
    },[])
  return (
    <div>
        {appl.map((satya)=>{
            return(
                <div key={satya._id}>
                    <h1>{satya.name}</h1>
                    <p>{satya.desc}</p>
                    <hr/>
                </div>
            )
        })}
    </div>
  )
}

export default ApiCalling
