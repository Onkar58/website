import React from 'react'
import styles from './navbar.module.css'
// import {NavLink} from 'react-router-dom'
import navbarInfo from '../info/navbarInfo'
import { useState } from 'react'




function Navbar({ url }) {

  const [btnState, setBtnState] = useState(false);
  const [mystyle, setMyStyle] = useState({
    display: 'none'
  })
  document.addEventListener('click', function () {
    if (btnState === true) {
      setMyStyle({
        display: 'none',
      });
      setBtnState(btnState => !btnState);
    }
  })
  function click1() {
    setBtnState(btnState => !btnState)
    if (mystyle.display === 'none') {
      setMyStyle({
        display: 'flex',
      })
    }
    else {
      setMyStyle({
        display: 'none',
      })
    }
  }

  let arrowToggle = btnState ? ' fa-angle-up' : ' fa-angle-down';
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
        </ul>
      </nav>
      <nav className={styles.navbar2}>
        <h3>HOME</h3>
        <button className='' onClick={click1}><i className={`fa-solid${arrowToggle}`}></i></button>
        <ul id="list1" style={mystyle}>
          {navbarInfo.map((currentValue) => <li><a href={currentValue.url}>{currentValue.title}</a></li>)}
        </ul>
      </nav>
    </>
  )
}

export default Navbar