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
  // const filterQuery = useContext()

  console.log("articlesData: ", articlesData)
  useEffect(() => {
    articlesData.getData('home')
  }, [])
  


  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <ArticleContainer />}/>
              

            <Route
              path="/:article"
              render={({match}) =>{
                 <ArticleDetail
                 url={match.params.url}/>
              }}
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
