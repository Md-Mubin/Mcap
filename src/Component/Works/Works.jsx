import React from 'react'
import CommonLinks from '../../Commons/CommonLinks'
import { Link } from 'react-router-dom'

const Works = () => {

    return (
        <>
            <section className='py-[120px]'>
                <div className="container">
                    <h1 className='w-[450px] text-center m-auto font-cormorant font-medium text-raja text-[80px] leading-[70px]'>Discover my featured <span className='italic underline underline-offset-8 decoration-[5px]'>works</span></h1>
                    <ul className='w-[600px] m-auto mt-12 mb-16 flex justify-center gap-12 font-inter font-normal text-raja text-lg leading-[36px]'>
                        <li className=' cursor-pointer line-through decoration-2 decoration-shenapoti font-bold duration-300'>All</li>
                        <li className=' cursor-pointer hover:font-bold duration-300'>Maternity</li>
                        <li className=' cursor-pointer hover:font-bold duration-300'>Portrait</li>
                        <li className=' cursor-pointer hover:font-bold duration-300'>Travel</li>
                        <li className=' cursor-pointer hover:font-bold duration-300'>Weeding</li>
                        <li className=' cursor-pointer hover:font-bold duration-300'>Others</li>
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