import React, { useState } from 'react'
import './Header.css'
var dayjs = require('dayjs')

const Header = () => {
  return ( 
   <header>
     <h1 className='site-title'>New York Times Reader</h1>
     <p className='header-date'>{`See the top news for ${dayjs(Date.now()).format("MMMM D, YYYY")}`}</p>
     <nav className='button-nav'>
       <button>Home</button>
       <button>Arts</button>
       <button>Science</button>
       <button>US</button>
       <button>World</button>
     </nav>
   </header>


   );
}
 
export default Header;