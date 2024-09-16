import React from 'react'
import Article from '../../components/article/Article'
import { luffy , sanji , nami , robin , Ussop , Frankie , Chopper , Brook , Jinbei} from './import'
import './thecrow.css';

const Crow_memeber = [
    { imageUrl:luffy,
        Role: 'The Leader',
        Name : 'Monkey D Luffy',
        Identification: 'The ambitious leader of the Straw Hat Crew, he is known for his cheerful spirit and positive energy. He possesses the power of the Gomu Gomu no Mi Devil Fruit, which grants him rubber abilities.'
       },
       { imageUrl:sanji ,
       Role: 'The Cook',
       Name : 'Vinsmoke Sanji',
       Identification: 'He is highly skilled in combat, using his legs as his main weapon. He has the morals of a knight, and is especially respectful of women.'
      },
      { imageUrl:nami ,
      Role: 'The Navigation',
      Name : 'Nami',
      Identification: 'She has extensive knowledge of mapping and direction. She started her life as a professional mapper before joining the crew .'
     },
     { imageUrl:Ussop ,
      Role: 'The Sniper',
      Name : 'Ussop',
      Identification: 'Known for his exaggerated tales and cheerful spirit, he seeks to become a brave sea warrior and prove himself as a sniper.'
     },
     { imageUrl:robin ,
     Role: 'Archaeologist',
     Name : 'Nico Robin',
     Identification: 'The last survivor of Ohara, the island of scientists. She seeks to uncover the history of the lost century and search for the Poneglyphs To find the history .'
    },
    { imageUrl:Frankie ,
      Role: 'The Carpenter',
      Name : 'The Cyborg Frankie',
      Identification: 'A cyborg carpenter recreates parts of his own body after a serious injury. He seeks to build a dream ship that can sail to the end of the world.'
     },
     { imageUrl:Chopper ,
      Role: 'The Doctor',
      Name : 'Tony Tony Chopper',
      Identification: 'A reindeer who ate the Devil Fruit "Hito Hito no Mi" which granted him human abilities. '
     },
     { imageUrl: Brook,
      Role: 'The Musician',
      Name : 'Brook skeleton',
      Identification: 'He has fighting skills using his sword and playing the violin. He is characterized by his cheerful spirit and love of music.'
     },
     { imageUrl: Jinbei,
      Role: 'The Shipmaster',
      Name : 'Son of the sea Jinbei',
      Identification: 'Nighthawk member of the Straw Hats. He was formerly the captain of the Sun Pirates and a member of the Shichibukai.'
     },
    
 ]
 
const TheCrow = () => {
  return (
    <div className='zoro__crow section__pedding' id='HC' >
      <div className="zoro__crow-heading">
        <h1 className='Gradient__text'>Number two after the captain in the Straw Hat Crew, along with his comrades, he is considered a mainstay.</h1>
      </div>
      <div className="zoro__crow-container">
        <div className='zoro__crow-container__top'>
        <div className="zoro__crow-container__top_groupeA">
         <Article
         imageUrl= {Crow_memeber[0].imageUrl}
         Role = {Crow_memeber[0].Role}
         Name = {Crow_memeber[0].Name}
         Identification = {Crow_memeber[0].Identification} />
        </div>
        <div className="zoro__crow-container__top_groupeB">
        {Crow_memeber.slice(1,3).map((item , i)=> 
           <Article key={i} imageUrl={item.imageUrl} 
           Role={item.Role}
           Name={item.Name}
           Identification={item.Identification}
            />) }
            </div>
            </div>  
            <div className='zoro__crow-container__buttom'>
            <div className="zoro__crow-container__buttom_groupeC">
                {Crow_memeber.slice(3,9).map((item , i)=> 
                  <Article key={i} imageUrl={item.imageUrl} 
                  Role={item.Role}
                  Name={item.Name}
                  Identification={item.Identification}
                    />) }
            </div>
              </div>    
      </div>
    </div>
  )
}

export default TheCrow
