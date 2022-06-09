import React, { useState } from 'react'
import './Header.css'
var dayjs = require('dayjs')

const Header = () => {
  return ( 
   <header>
     <h1 className='site-title'>New York Times Reader</h1>
     {/* <p className='header-date'>`See the top news on ${dayjs(Date.now(), 'MM-DD-YYYY')}`</p> */}
   </header>


   );
}
 
export default Header;