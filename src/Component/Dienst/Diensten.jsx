
import React from 'react'
import dinst from '../../asents/logo-img/dinst.png'
import dinst2 from '../../asents/logo-img/dinst2.png'
import './Diensten.css'
function Diensten() {
  return (
    <div className='main'>
        <h1 className='contact--title'>Diensten</h1>
        
      <div className='dinst'>
        <div className='dinst__card'>
            <div class=" dinst__logo">
                <img src={dinst} alt="" />
            </div>
            <div class="dinst__text">
                <h2>Front-end</h2>
                    <p> 
                        Ik ken front-end.
                        Ik kan website maken een designen.
                        Een ok kan ik mensen helpen met designen een coderen.
                          </p>
            </div>
        </div>
        <div className='dinst__card'>
            <div class=" dinst__logo">
                <img src={dinst2} alt="" />
            </div>
            <div class="dinst__text">
                <h2>Elektriciteit</h2>
                    <p> 
                        ik heb al elektricien gewerkt bij GIEC.
                    </p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Diensten
