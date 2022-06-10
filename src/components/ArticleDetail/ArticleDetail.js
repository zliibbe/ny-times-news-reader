import React, { useState, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import './ArticleDetail.css'
import { useHistory } from 'react-router-dom'


const ArticleDetail = ({articles, id}) => {
  const articleDetail = useContext(DataContext)
  const selectedArticle = articleDetail.articles.find(article => article.short_url.split('/')[3] === id)
  const history = useHistory()

  return (
    <div className='article-detail'>
        <div className='image-container'>
          {/* <img src={selectedArticle.image}/>       */}
        </div>
        <div className="">
          <div className='title-byline-container'>
            <h2 className='title'>{selectedArticle.title}</h2>
            <p className='byline'>{selectedArticle.byline}</p>
          </div>
          <p className='abstract'>{selectedArticle.abstract}</p>
          <div className='button-container'>
            <a className='read-more-btn' href={selectedArticle.url} target="_blank">Read Full Article</a>
            <div className='detail-back-button' onClick={history.goBack}>Go Back</div>
          </div>
          </div>  
    </div>
  );
}
 
export default ArticleDetail;
