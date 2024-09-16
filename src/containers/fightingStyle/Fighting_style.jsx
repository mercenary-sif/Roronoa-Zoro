import React from 'react'
import { Feature } from '../../components'
import './fightingStyle.css'
const Style_features = [
   { title: 'Santoryu (Triple Sword Style)',
     text : "This is Zoro's most distinctive style, where he uses three swords in combat, with Zoro holding one sword in each hand, while holding the third sword between his teeth. This style allows him to perform advanced offensive and defensive techniques, as he can strike his enemies from multiple angles at the same time."
   },
   { title: 'Nitorio (Dual Sword Style)',
    text : "In this style, Zoro uses only two swords, focusing on attacks and defenses using only two swords instead of three."
  },
  { title: 'Itorio (One Sword Style)',
    text : "In this style, Zoro uses only one sword, which is the simplest and least used style compared to the other styles."
  },
  { title: 'Armament Haki',
    text : "Zoro uses this type of Haki in an advanced way to enhance the power of his strikes and protect himself from attacks."
  }
  ,{ title: 'Prediction Haki (Manter Haki)',
    text : " Zoro uses this type of Haki to observe his enemies' movements and improve his ability to respond to attacks. His use of this Haki is seen in his battles to read his opponents' movements and exploit gaps in their defenses."
  },
  { title: 'Royal Haki',
    text : "Zoro possesses this type of Haki, although he has not shown it as prominently in the series thus far compared to some other characters. When Zoro shows his abilities in this type of Haki, it has a great effect on his opponents and can help him in important battles."
  }
]

const Fighting_style = () => {
  return (
    <div id='FS' className='zoro__fs section__pedding'>
      <div className="zoro__fs-heading">
        <h1 className='Gradient__text'>The fighting style that makes Zoro such a powerful and influential character in the One Piece universe</h1>
        <p>Also adds depth to his fighting abilities and battle strategy.</p>
      </div>
      <div className="zoro__fs-container">
       {Style_features.map((item , i)=> 
           <Feature key={i} title={item.title} text={item.text} />) }
      </div>
    </div>
  )
}

export default Fighting_style
