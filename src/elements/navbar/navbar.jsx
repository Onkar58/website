import React from 'react'
import styles from './navbar.module.css'
// import {NavLink} from 'react-router-dom'
import navbarInfo from '../info/navbarInfo'
// import { useState } from 'react'




function Navbar({ url }) {

return (
  <>
    {/* <nav className={styles.navbar}>
        <ul>
          {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
          </ul>
  </nav>*/}
    <nav className={styles.navbar2}>
      <h3>HOME</h3>
      <button><i className="fa-solid fa-angle-down"></i></button>
      <ul id="list1">
        {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
      </ul>
    </nav>
  </>
)
}

export default Navbar