import React, { useState } from 'react'
import './navbar.css'
import logo from '../../images/logo 3.png'
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'

const Menu = () => {
 return(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#WIZ'>Who Is Zoro</a></p>
    <p><a href='#FS'>Fighting Style</a></p>
    <p><a href='#KOFH'>King Of hell</a></p>
    <p><a href='#HC'>His Crow</a></p>
 
 </>)
};


const Navbar = () => {
  const [menu , setMenu]= useState(false)
  // BEM --> Block Element Modifier 
  return (
    <div>
      <div className="zoro__navbar">
       <div className="zoro__navbar-links">
          <div className="zoro__navbar-links_logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="zoro__navbar-links_container">
          <Menu/>
          </div>
       </div>
       <div className='zoro__navbar-sing'>
            <p>Sing in</p>
            <button type='button'>Sing up</button>
          </div>
          <div className='zoro__navbar-menu'>
            {
              menu ?
              <RiCloseLine size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
              :
              <RiMenu3Line size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
            }
            {
              menu &&
              <div className='zoro__navbar-menu_container scale-up-center'>
                <div className='zoro__navbar-menu_container-links'>
               <Menu/>
                </div>
                <div className='zoro__navbar-menu_container-links_sing'>
                  <p>Sing in</p>
                  <button type='button'>Sing up</button>
                </div>
              </div>
              
            }
          </div>
      </div>
    </div>
  )
}

export default Navbar
