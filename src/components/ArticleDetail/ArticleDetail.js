import React, { useState } from 'react'
import './ArticleDetail.css'


const ArticleDetail = (props) => {
  return (
    <div className='article-detail'>
      <div>
        <img href=""/>      
      </div>
      <div className=''>
        <h2 className='title'>Title</h2>
        <p className='abstract'>absract goes here</p>
      </div>
      
    </div>
  );
}
 
export default ArticleDetail;

/*
<div className='article'>
      <h2 className='title'>{props.title}</h2>
      <div>
        <img href={props.image}/>      
      </div>
      <p className='article-abstract'>{props.abstract}</p>
      <div>
        <Link to={props.url}>
          <button className='read-more-btn' type='button' >Read More</button>
        </Link>
      </div>
    </div>
    */