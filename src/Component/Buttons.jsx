import React from 'react'
import detail from './detail/Detail'
import { Link } from 'react-router-dom'

export default function Buttons(props) {
  return (
    <div className='btn'>
      <Link className='btn__link' to={`/detail/${props.link}`}>More...</Link>
    </div>
  )
}
