import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './css/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(SidebarData)

  const [burger, setBurger] = useState(false);

  const showBurger = () => setBurger(!burger);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className={sidebar ? 'navbar-toggle active' : 'navbar-toggle'}>
              <Link to='#' className='menu-bars'>
              <FaIcons.FaBars className={burger ? 'burger' : 'croix'} onClick={showBurger}/>
                <AiIcons.AiOutlineClose className={burger ? 'croix' : 'burger'} onClick={showBurger}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className={sidebar ? 'big' : "small"}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;