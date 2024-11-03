import React from 'react'
import Banner from '../Component/Banner/Banner'
import Company_logo from '../Component/Company_Logos/Company_logo'
import CapturePeople from '../Component/CapturePeople/CapturePeople'
import Awards from '../Component/Awards/Awards'
import Works from '../Component/Works/Works'
import Clients from '../Component/Clients/Clients'
import PricingPlans from '../Component/PricingPlans/PricingPlans'
import Memorable from '../Component/Memorable/Memorable'
import Blogs from '../Component/Blogs/Blogs'

const Home = () => {
  return (
    <>
      <Banner />
      <Company_logo />
      <CapturePeople />
      <Awards />
      <Works />
      <Clients />
      <PricingPlans />
      <Memorable />
      <Blogs />
    </>
  )
}

export default Home