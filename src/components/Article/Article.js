import React, { useState, Link } from 'react'
// import Link from 'react-router-dom'
import './Article.css'

const Article = (props) => {
  return ( 
    
    <div className='article'>
      <div>
        <img src={props.image}/>      
      </div>
      <div className='title-byline'>
        <h2 className='title'>{props.title}</h2>
        <p className='byline'>{props.byline}</p>
      </div>
    </div>

   );
}
 
export default Article