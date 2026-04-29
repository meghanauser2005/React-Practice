import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const apiUrl="http://13.235.76.33:3000/product/all-products"
const imgUrl="http://13.235.76.33:3000"
const Axiostopic = () => {
    const[appl,setAppl]=useState([])

    const dataHandler = async () => {
        try{
            // const response = await fetch(apiUrl)
            // const friday = await response.json()
            // console.log(friday)
            const response = await axios.get(apiUrl)
            console.log(response)
            setAppl(response.data.products)
        }catch(error){
            console.log(error.message)
        }
    }


    useEffect(()=>{
        dataHandler()
        // console.log("checking api data",appl)
    },[])
  return (
    <div className='product'>
        {appl.map((satya)=>{
            return(
                <Link to={`/single/${satya._id}`}>
                <div className='user' key={satya._id}>
                    <img src={`${imgUrl}${satya.image}`} alt="" />
                    <h1 className='text-4xl bg-amber-300 ml-1.5 begumpet'>{satya.name}</h1>
                    <p className='text-blue-600'>{satya.price}</p>
                    <hr/>
                </div> 
                </Link>
            )
        })}
    </div>
  )
}

export default Axiostopic
