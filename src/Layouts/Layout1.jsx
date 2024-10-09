import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'

const Layout1 = () => {
    return (
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout1