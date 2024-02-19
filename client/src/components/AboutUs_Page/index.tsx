
import React from 'react'

const data = async() =>{
    const response = await fetch('http://localhost:4040')
    return await response.json();
}

export default async function about() {
    const res = await data()
  return (
    <div
    className='text-center text-orange-400 text-6xl my-14'
    >{ res.message }</div>
  )
}
