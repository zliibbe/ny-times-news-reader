import './App.css'
import fetchData from '../../apiCalls';
import React, { useState } from 'react'

function App() {
  
  fetchData()

  return (
    <h1>News York Times Reader</h1>
  )
}

export default App;
