import React, { useState } from 'react'
import Helmet from './Helmet'

const userName="Hyderabad"
const Props = () => {
    const[product,setProduct]=useState("My Products")
  return (
    <div>
    <Helmet friend={userName}/>
    </div>
  )
}

export default Props
