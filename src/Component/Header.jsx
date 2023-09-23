import React from 'react'
import './Header.css';
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react';
import menu from '../asents/logo-img/iconmonstr-menu-thin.svg'

function Header({links}) {
      //
      const location = useLocation();
      //
      const isHomePage = location.pathname === "/";
      const isAboutPage = location.pathname === "/about";
      const isProjectenPage = location.pathname === "/projecten";
      const isContactPage = location.pathname === "/contact";
      const isHiddenDetail = isHomePage || isAboutPage || isProjectenPage  || isContactPage ;

    const [isOpen , setIsOpen ] = useState(false);
  return (
    <div className='Navi'>
        <div class={`menu ${isOpen ? "active": ''}`}> 
        <button class="btnv" onClick={() => setIsOpen( !isOpen )}>
          <img src={menu} alt="" />
        </button>
          <nav class={`menu-nav ${isOpen ? 'menu-nav--open': 'menu-nav--closed'}`}>
            <ul className={isOpen? '': "non"}>
              {links.map(e => isHiddenDetail && e.name === "Detail" ? null : <NavLink key = {e.path} to = {e.path}>{e.name}</NavLink>)}
            </ul>
        </nav>

       
        </div>
    </div>
  )
}

export {Header} ;


