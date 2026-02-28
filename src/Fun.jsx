import React from 'react'
import States from './States'

const Fun = () => {
  return (
    <div>
      <h1>Hello world</h1>
      {15<50 && <States/>}
    </div>
  )
}

export default Fun
