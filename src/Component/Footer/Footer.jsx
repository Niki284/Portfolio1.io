import React from 'react';
import '../Footer/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <ul className="footer__list">
          <li>
            📞 GSM: <a className="footer__link" href="tel:0472554036">0472 55 40 36</a>
          </li>
          <li>
            📧 E-mail: <a className="footer__link" href="mailto:dymovichnikita@gmail.com
">dymovichnikita@gmail.com
</a>
          </li>
        </ul>
      </div>

      <div className="footer__cta">
        <a className="footer__button" href="/contact">Neem contact op →</a>
      </div>
    </footer>
  );
};


// import React from 'react'
// import '../Footer/footer.css'
// export const Footer = () => {
//   return (
    
//          <footer className='footer'>
//       <div>
//       <ul className='footer-liste'>
//         <li className='footer-lis'>Mijn GSM: <a className='footer-link' href="0472554036">0472554036</a></li>
//         <li className='footer-lis'>Mijn Email is: <a className='footer-link' href="dymovich2015@mail.ru">dymovich2015@mail.ru</a></li>
//       </ul>
//     </div>
//          <div className='btn'>
//           <a className='btn__link ' href="/contact">Contact me...</a>
//           </div>
//       </footer>
    
//   )
// }
