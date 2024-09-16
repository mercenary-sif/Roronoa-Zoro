import React from 'react'
import './feature.css'
const Feature = (props) => {
  return (
    <div className='zoro__features-container__feature'
    
    >
      <div className="zoro__features-container__feature-title">
      <div />
      <h1>{props.title}</h1>
    </div>
    <div className="zoro__features-container__feature-text">
      <p>{props.text}</p>
    </div>
    </div>
  )
}

export default Feature
