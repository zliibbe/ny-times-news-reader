import React, { createContext, useState } from "react"
import fetchData from '../apiCalls'

const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  
  const getData = (type) => {
    fetchData(type)
    .then(data => {
      setArticles(data.results)
    })
  }

 
  return (  
    <DataContext.Provider
      value={{
        articles,
        setArticles,
        getData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
 
export { DataContextProvider, DataContext }