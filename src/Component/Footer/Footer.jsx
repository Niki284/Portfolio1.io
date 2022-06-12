import React from 'react'
import '../Footer/footer.css'
export const Footer = () => {
  return (
    
         <footer className='footer'>
      <div>
      <ul className='footer-liste'>
        <li className='footer-lis'>Mijn GSM: <a className='footer-link' href="0484199928">0484199928</a></li>
        <li className='footer-lis'>Mijn Email is: <a className='footer-link' href="dymovich2015@mail.ru">dymovich2015@mail.ru</a></li>
      </ul>
    </div>
         <div className='btn'>
          <a className='btn__link' href="/contact">Contact me...</a>
          </div>
      </footer>
    
  )
}
