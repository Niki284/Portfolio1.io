import React from 'react'


export default function inputs({data}) {
  console.log(data)
  return (
    <div className='inputs'>
        <label htmlFor="Firstname">{data[0]}</label>
        <input type="text" placeholder={data[1]} />
    </div>
  )
}
