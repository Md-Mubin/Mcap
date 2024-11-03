import React from 'react'
import CommonLinks from '../../Commons/CommonLinks'
import { Link } from 'react-router-dom'
import './Works.css'

const Works = () => {

    return (
        <>
            <section className='worksSection'>
                <div className="container">
                    <h1>Discover my featured <span>works</span></h1>
                    <ul className='worksRow'>
                        <li>All</li>
                        <li>Maternity</li>
                        <li>Portrait</li>
                        <li>Travel</li>
                        <li>Weeding</li>
                        <li>Others</li>
                    </ul>
                    <ul className='mt-[64px] font-oswald font-medium text-xl text-raja leading-[30px] flex gap-[53px]'>
                        <li className='w-[300px] h-[350px] bg-[#C4C4C4] relative mt-[112px]'><span className='absolute bottom-5 right-[-16px]'>Headshot</span></li>
                        <li className='w-[350px] h-[400px] bg-[#C4C4C4] relative'><span className='absolute top-[22px] left-[-20px]'>Maternity</span></li>
                        <li className='w-[300px] h-[300px] bg-[#C4C4C4] relative mt-[162px]'><span className='absolute bottom-5 right-[-16px]'>Weeding</span></li>
                        <li className='w-[300px] h-[400px] bg-[#C4C4C4] relative mt-[28px]'><span className='absolute top-[22px] left-[-20px]'>Portrait</span></li>
                    </ul>
                    <Link to={"#"} className='mt-12 w-fit m-auto flex border-b-2 border-shenapoti'>
                        <CommonLinks LinksName={"View All Works"} />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Works