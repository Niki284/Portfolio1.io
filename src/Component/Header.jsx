import React, { useState } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import menuIcon from '../assets/logo-img/iconmonstr-menu-thin.svg';

function Header({ links }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Verberg "Detail"-link op deze routes
  const hideDetail = ["/", "/about", "/projecten", "/contact"].includes(location.pathname);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <img src={menuIcon} alt="menu icon" />
        </button>
        <nav className={`menu-nav ${isOpen ? 'show' : 'hide'}`}>
          <ul>
            {links.map(link =>
              hideDetail && link.name === "Detail" ? null : (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };


// import React from 'react'
// import './Header.css';
// import {Link, NavLink, useLocation} from 'react-router-dom'
// import { useState } from 'react';
// import menu from '../assets/logo-img/iconmonstr-menu-thin.svg'

// function Header({links}) {
//       //
//       const location = useLocation();
//       //
//       const isHomePage = location.pathname === "/";
//       const isAboutPage = location.pathname === "/about";
//       const isProjectenPage = location.pathname === "/projecten";
//       const isContactPage = location.pathname === "/contact";
//       const isHiddenDetail = isHomePage || isAboutPage || isProjectenPage  || isContactPage ;

//     const [isOpen , setIsOpen ] = useState(false);
//   return (
//     <div className='Navi'>
//         <div class={`menu ${isOpen ? "active": ''}`}> 
//         <button class="btnv" onClick={() => setIsOpen( !isOpen )}>
//           <img src={menu} alt="" />
//         </button>
//           <nav class={`menu-nav ${isOpen ? 'menu-nav--open': 'menu-nav--closed'}`}>
//             <ul className={isOpen? '': "non"}>
//               {links.map(e => isHiddenDetail && e.name === "Detail" ? null : <NavLink key = {e.path} to = {e.path}>{e.name}</NavLink>)}
//             </ul>
//         </nav>

       
//         </div>
//     </div>
//   )
// }

// export {Header} ;


