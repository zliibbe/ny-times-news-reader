import React, { useState, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import './ArticleDetail.css'


const ArticleDetail = (props) => {
  const articleDetail = useContext(DataContext)

  return (
    <div className='article-detail'>
        <div className='image-container'>
          <img src={articleDetail.image}/>      
        </div>
        <div className='title-byline-container'>
          <h2 className='title'>{articleDetail.title}</h2>
          <p className='byline'>{articleDetail.byline}</p>
        </div>
        <p className='abstract'>{articleDetail.abstract}</p>

    </div>
  );
}
 
export default ArticleDetail;

/*
<div className='article-detail'>
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