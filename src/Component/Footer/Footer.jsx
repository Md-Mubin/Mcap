import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='w-full pt-[116px] py-[120px] bg-raja'>
        <div className="container">
          <img src="images/Logo.png" alt="logo_image" className='m-auto' />

          <p className='font-inter font-normal text-[16px] text-[#fff] leading-[26px] mt-4 text-center'>© 2022 Elliana Mary  All Rights Reserved</p>

          <div className="border w-1/2 m-auto border-[#818181] opacity-30 mt-12"></div>

          <ul className='py-9 font-inter font-normal text-[16px] text-[#fff] leading-[26px] flex justify-center gap-[45px]'>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>About</Link>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>Project</Link>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>Blog</Link>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>Pricing</Link>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>Studio</Link>
            <Link to={"#"} className='hover:text-shenapoti duration-300'>Contact</Link>
          </ul>

          <div className="border w-1/2 m-auto border-[#818181] opacity-30"></div>

          <ul className='mt-9 flex gap-20 justify-center font-cormorant font-medium text-lg text-[#fff] leading-[26px]'>
            <a href='#' className='hover:text-shenapoti duration-300'>Facebook</a>
            <a href='#' className='hover:text-shenapoti duration-300'>Twitter</a>
            <a href='#' className='hover:text-shenapoti duration-300'>Instagram</a>
            <a href='#' className='hover:text-shenapoti duration-300'>Linkedin</a>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer