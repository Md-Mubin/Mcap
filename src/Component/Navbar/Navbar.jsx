import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleNav } from '../../Slices/ReduxSlice'

const Navbar = () => {

  const dispatch = useDispatch()

  const handleShow =()=>{
    dispatch(toggleNav())
  }

  return (
    <>
      <nav className='w-full pt-[29px] absolute top-0 z-10'>
        <div className="w-[1620px] flex justify-between m-auto">
          
          <div className="navRow flex gap-[129px]">
            <img src="images/Logo.png" alt="logo_image" />
            <ul className='flex gap-12 items-center font-inter font-normal text-[16px] text-[#fff]'>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>About</Link>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>Project</Link>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>Blog</Link>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>Pricing</Link>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>Studio</Link>
              <Link to={"#"} className='leading-[26%] hover:text-shenapoti duration-300'>Contact</Link>
            </ul>
          </div>

          <button onClick={handleShow} className="navBar text-[32px] text-[#fff]">
            <FaBars/>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar