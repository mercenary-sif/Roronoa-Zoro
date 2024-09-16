import React from 'react';
import './footre.css';
import logo from '../../images/logo 3.png'
const Footer = () => {
  return (
    <div className='zoro__footer section__pedding'>
      <div className="zoro__footer-heading">
        <h1 className='Gradient__text'>
          Would you like to join the Straw Hat Crew with Roronoa Zoro?
        </h1>
      </div>
      <div className="zoro__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="zoro__footer-links">
        <div className="zoro__footer-links_logo">
            <img src={logo} alt="logo" />
            <p>The first fleet of the Straw Hat Yonko under the command of Roronoa Zoro.</p>
        </div>
        <div className="zoro__footer-links_logo_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counter</p>
            <p>Contact</p>
      </div>
      <div className="zoro__footer-links_logo_div">
            <h4>One Piece</h4>
            <p>Manga</p>
            <p>Anime </p>
            <p>Tv Show</p>
      </div>
      <div className="zoro__footer-links_logo_div">
            <h4>Author</h4>
            <p>Eiichiro Oda</p>
            
        </div>
      </div>

      <div className="zoro__footer-copyright">
        <p>© 2024 Roronoa Zoro codding by The Mercenary Sif Eddine Aguaguena. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
