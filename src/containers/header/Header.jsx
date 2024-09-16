import React from 'react'
import './header.css'
import Zoro from '../../images/Z3.png'
const Header = () => {
  return (
    <div className='zoro__header section__pedding' id='home'>
      <div className="zoro__header-content">
        <h1 className='Gradient__text'>
        Roronoa Zoro is a swordsman ,
         being the first member to join Monkey D. Luffy's crew.
        </h1>
        <p> Zoro is known for his exceptional swordsmanship,
             using a unique fighting style called "Santoryu" or "Three-Sword Style,
            " where he wields a sword in each hand and a third in his mouth.
           </p>
             <div className="zoro__header-content_input">
            <input type='email' placeholder='Your adress @email ...'/>
            <button type='button'>Get Started</button>
        </div>
      </div>
      <div className="zoro__header-image">
            <img src={Zoro} alt='zoro'/>
        </div>
    </div>
  )
}

export default Header
