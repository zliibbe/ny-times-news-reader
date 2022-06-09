import React, { useContext } from 'react'
import './ArticleContainer.css'
import { DataContext } from '../../contexts/DataContext'
import Article from '../Article/Article'



const ArticleContainer = () => {
  const newYorkTimes = useContext(DataContext)
  console.log(newYorkTimes.articles);
  
  const createArticleCards = () => {
    return newYorkTimes.articles.map(article => {
      console.log("Article: ", article)
      return <Article key={article.title} title={article.title} image={article.multimedia[1].url} byline={article.byline} url={article.url} />
    })
  }


  return ( <section className="article-container">{createArticleCards()}</section>  );
}
 
export default ArticleContainer;