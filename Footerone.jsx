import React from 'react'
import '../styles/footer.css'
import { HashLink } from 'react-router-hash-link'

const Footerone = () => {
  return (
    <footer>
        <main className='footer-main1'>
            <HashLink to="/#home"><h1>CODING ON</h1></HashLink>
            <h3>solution for all </h3>
        </main>
        <main className='footer-main2'>
            <h2>SOCIAL MEDIA</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://www.twitter.com/">Twitter</a>
        </main>
    </footer>
  )
}

export default Footerone