import React from 'react'
import styles from './navbar.module.css'
// import {NavLink} from 'react-router-dom'
import navbarInfo from '../info/navbarInfo'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
        </ul>
      </nav>
    </>
  )
}

export default Navbar