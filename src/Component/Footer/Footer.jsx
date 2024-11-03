import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <img src="images/Logo.png" alt="logo_image" className='m-auto' />

          <p className='licence'>© 2022 Elliana Mary All Rights Reserved</p>

          <div className="border w-1/2 m-auto border-[#818181] opacity-30 mt-12"></div>

          <ul className='footerLinks'>
            <Link to={"#"} >About</Link>
            <Link to={"#"} >Project</Link>
            <Link to={"#"} >Blog</Link>
            <Link to={"#"} >Pricing</Link>
            <Link to={"#"} >Studio</Link>
            <Link to={"#"} >Contact</Link>
          </ul>

          <div className="border w-1/2 m-auto border-[#818181] opacity-30"></div>

          <ul className='footerSocials'>
            <a href='#' >Facebook</a>
            <a href='#' >Twitter</a>
            <a href='#' >Instagram</a>
            <a href='#' >Linkedin</a>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer