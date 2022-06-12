import React from 'react'
import './Tech.css'
import img1 from '../../asents/logo-tech/image 1-1.svg'
import img2 from '../../asents/logo-tech/image 1-2.svg'
import img3 from '../../asents/logo-tech/image 1-3.svg'
import img4 from '../../asents/logo-tech/image 1-4.svg'
import img5 from '../../asents/logo-tech/image 1-5.svg'
import img6 from '../../asents/logo-tech/image 1-6.svg'
import img7 from '../../asents/logo-tech/image 1-7.svg'
import img8 from '../../asents/logo-tech/image 1.svg'
export default function Tech() {
  return (
    <div className='tech'>
        <div className='tech-content'>
            <h2 className='contact--title'>Fremworks</h2>
            <div className='tech--info'>
                <img src={img3} alt=""></img>
                <p>React</p>
            </div>
            <div class="tech--info">
                <img src={img2}  alt=""></img>
                <p>Laravel</p>
            </div>
            <div class="tech--info">
                <img src={img4} alt=""></img>
                <p>MySql</p>
            </div>
        </div>
        <div class="tech-content">
            <h2 className='contact--title' >Taal</h2>
            <div class="tech--info">
                <img src={img1}alt=""></img>
                <p>PHP</p>
            </div>
            <div class="tech--info">
                <img src={img8} alt=""></img>
                <p>JavaScript</p>
            </div>
            <div class="tech--info">
                <img src={img7} alt=""></img>
                <p>Scss</p>
            </div>
            <div class="tech--info">
                <img src={img5} alt=""></img>
                <p>Html</p>
            </div>
            <div class="tech--info">
                <img src={img6} alt=""></img>
                <p>Css</p>
            </div>
        </div>
        
    </div>
  )
}
