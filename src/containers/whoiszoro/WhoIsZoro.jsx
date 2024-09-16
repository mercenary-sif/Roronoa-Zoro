import React from 'react'
import './whoiszoro.css'
import { Feature } from '../../components'
const WhoIsZoro = () => {
  return (
    <div className='zoro__whoiszoro section__margin' id='WIZ'>
      <div className="zoro__whoiszoro-feature">
        <Feature 
         title={"Who Is Roronoa Zoro"}
         text={'Roronoa Zoro is one of the main characters in the anime and manga One Piece, written by Eiichiro Oda. Zoro is considered the first swordsman of the Straw Hat Crew led by Monkey D. Luffy, and is the first member to join the crew.'} />
      </div>
      <div className="zoro__whoiszoro-heading">
      <h1 className='Gradient__text'>
      The possibilities are beyond your imagination
      </h1>
      <p>Explore The Features</p>
      </div>
      <div className="zoro__whoiszoro-container">
      <Feature title ={"Origins and Background"}
      
      text= {"A descendant of the Shimotsuki clan of the country of Wano. Specifically, he is related to Shimotsuki Ryōma, the legendary samurai known as the king of the Sword, who is also the ancestor of Shimotsuki Ushimaru, the former daimyō of Renjō."} />
      <Feature title={"Personality"}
         
         text= {"He is a serious and serious character most of the time, but he does show a comedic side in some situations, especially when it comes to his bad sense of direction. He is considered a leading member of the crew despite his sometimes individualistic nature."} />
      <Feature  title={"Dreem"}
           
                  text ={"He has a strong ambition to become the greatest swordsman in the world. Since joining Luffy and his companions, his goal has been clear and always in sight, as he seeks to fulfill this ambition in honor of a promise he made to his childhood friend Kuina, who also had the same dream."}
                    />
      </div>
    </div>
  )
}

export default WhoIsZoro
