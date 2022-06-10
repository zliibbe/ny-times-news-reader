import React, { useContext, useState } from 'react'
import './Header.css'
import { DataContext } from '../../contexts/DataContext'
import { Link } from 'react-router-dom'
var dayjs = require('dayjs')

const Header = () => {
  const newYorkTimes = useContext(DataContext)

  return ( 
   <header>
     <h1 className='site-title'>New York Times Reader</h1>
     <p className='header-date'>{`See the top news for ${dayjs(Date.now()).format("MMMM D, YYYY")}`}</p>
     <nav className='button-nav'>
       
      <Link to="/">
        <button onClick={() => newYorkTimes.getData('home')}>Home</button>
      </Link>
      <Link to="/arts">
        <button onClick={() => newYorkTimes.getData('arts')}>Arts</button>
      </Link>
      <Link to="/science">
       <button onClick={() => newYorkTimes.getData('science')}>Science</button>
      </Link>
      <Link to="/us">
       <button onClick={() => newYorkTimes.getData('us')}>US</button>
      </Link>
      <Link to="/world">
       <button onClick={() => newYorkTimes.getData('world')}>World</button>
      </Link>
     </nav>
   </header>


   );
}
 
export default Header;