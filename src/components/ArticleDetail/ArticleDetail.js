import React, { useState, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import './ArticleDetail.css'


const ArticleDetail = ({articles, id}) => {
  const articleDetail = useContext(DataContext)
  console.log("articleDetail: ", articleDetail);
  const selectedArticle = articleDetail.articles.find(article => article.short_url.split('/')[3] === id)

  console.log("selectedArticle: ", selectedArticle);
  return (
    <div className='article-detail'>
        <div className='image-container'>
          {/* <img src={selectedArticle.image}/>       */}
        </div>
        <div className='title-byline-container'>
          <h2 className='title'>{selectedArticle.title}</h2>
          <p className='byline'>{selectedArticle.byline}</p>
        </div>
        <p className='abstract'>{selectedArticle.abstract}</p>
        <a href={selectedArticle.url}>Read More</a>
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