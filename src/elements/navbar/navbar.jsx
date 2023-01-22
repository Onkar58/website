import React from 'react'
import styles from './navbar.module.css'
// import {NavLink} from 'react-router-dom'
import navbarInfo from '../info/navbarInfo'

function Navbar({ url }) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
          </ul>
        </nav>
      {/* <nav className={styles.navbar2}>
        <h3>HOME</h3> 
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href="#">Menu ^</a>
            <ul className={styles.dropdown}>
              {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
            </ul>
          </li>
          <li><a href='#'>About</a></li>
        </ul>
      </nav> */}
    </>
  )
}

export default Navbar