import React from 'react'
import './article.css'
const Article = ({imageUrl , Role , Name , Identification}) => {
  return (
    <div className='zoro__crow-container_article'>
      <div className="zoro__crow-container_article-image">
        <img src={imageUrl} alt='article pic'/>
      </div>
      <div className="zoro__crow-container_article-content">
        <p>{Role}</p>
        <h3>{Name}</h3>
        <p>{Identification}</p>
      </div>
    </div>
  )
}

export default Article
