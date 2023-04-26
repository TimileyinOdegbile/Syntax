import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#aboutUs'>About Us</a></p>
    <p><a href='#order'>Order Ride</a></p>
    <p><a href='#drivers'>Our Drivers</a></p>
    <p><a href='#contact'>Contact</a></p>
    <p><a href='#gallery'>Gallery</a></p>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='syntax__navbar'>
      <div className='syntax__navbar-links'>
        <div className='syntax__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='syntax__navbar-links_container'>
         <Menu /> 
        </div>
      </div>
      <div className='syntax__navbar-menu'>
        { toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} ></RiCloseLine> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} ></RiMenu3Line> 
        }
        {toggleMenu && (
          <div className='syntax__navbar-menu_container scale-up-center'>
            <div className='syntax__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default NavBar