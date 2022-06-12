import React from 'react'
import Button from '../Buttons'
const Card = ({data}) => {
  return (
        <div className='Card'>
          <div class="card__logo">
            <img src= {process.env.PUBLIC_URL + data.picture} alt="" />
          </div>
          <div class="card__text">
            <h2>{data.name}</h2>
            <p>{data.info}</p>
            <Button link = {data.id}/>
          </div> 
        </div>
  )
}
export default Card