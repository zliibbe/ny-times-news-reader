import React, { useState, useHistory } from 'react'
import { NavLink } from "react-router-dom"
import './Article.css'

const Article = (props) => {
  return ( 
    <NavLink to={`/${props.url}`}>
      <div className='article'>
        <div className='image-container'>
          <img src={props.image}/>      
        </div>
        <div className='title-byline-container'>
          <h2 className='title'>{props.title}</h2>
          <p className='byline'>{props.byline}</p>
        </div>
      </div>
    </NavLink>
   );
}
 
export default Article