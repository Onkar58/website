import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.bg} id="contact">
        <div className={styles.container}>
          <h1 className={styles.headings}>Get in Touch</h1>
          <div className={styles.links}>
            <a href="mailto: onkarwaghmode58@gmail.com">
            <button className={styles.btn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
              </svg>
              Contact Me
            </button>
            </a>
            <div className={styles.icons}>
              <a href='https://www.instagram.com/onkar.58' target="blank"><i className="fa-brands fa-instagram"></i></a>
              <a href='https://www.linkedin.com/in/onkar58' target="blank"><i className="fa-brands fa-linkedin"></i></a>
              <a href='https://github.com/Onkar58/' target="blank"><i className="fa-brands fa-github"></i></a>
              <a href='https://twitter.com/_Onkar58' target="blank"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact