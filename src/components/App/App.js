import './App.css'
import React, { useState, useContext, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Layout from '../Layout/Layout'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetail from '../ArticleDetail/ArticleDetail'
import { DataContext } from '../../contexts/DataContext'
import Error from '../Error/Error'


function App() {
  const articlesData = useContext(DataContext)

  useEffect(() => {
    articlesData.getData('home')
  }, [])
  
  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <ArticleContainer />}/>

            <Route exact path="/arts" render={() => <ArticleContainer />}/>

            <Route exact path="/science" render={() => <ArticleContainer />}/>

            <Route exact path="/us" render={() => <ArticleContainer />}/>

            <Route exact path="/world" render={() => <ArticleContainer />}/>

            <Route
              path="/:id"
              render={({match}) =>{
                 return (
                 <ArticleDetail
                 articles={articlesData}
                 id={match.params.id}
                 url={match.params.url}/>
              )}}
            />
            
            <Route>
              <Error />
            </Route>
          </Switch>
        </Layout>
    </div>
  )
}

export default App;
