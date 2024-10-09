import React from 'react'
import { useSelector } from 'react-redux'

const Banner = () => {

    const toggleForm = useSelector((state) => state.counter.value)

    return (
        <>
            <section className='w-full h-[960px] flex relative'>
                <ul className='w-[740px] bg-[#c4c4c4] relative'>
                    <li className='mt-[794px] ml-[150px]'>
                        <p className='font-oswald font-semibold text-[30px] text-[#fff]'>Elliana Mary</p>
                        <p className='font-inter font-normal text-[16px] text-[#fff] mt-[6px]'>Professional Photographer</p>
                    </li>
                </ul>

                <ul className='w-[440px] bg-[#b92828]'>
                    <li className='w-[485px] absolute mt-[148px] ml-[240px]'>
                        <h1 className='font-cormorant font-medium text-[96px] text-[#fff] leading-[80px]'>Love to <span className='italic underline underline-offset-8 decoration-[5px]'>capture</span> the best <span className='italic underline underline-offset-8 decoration-[5px]'>moments</span></h1>
                        <p className='font-DMsans font-normal text-lg text-[#fff] leading-[28px] mt-10'>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
                    </li>
                </ul>

                <ul className='w-[740px] bg-raja'>
                    <li className='w-[470px] h-[300px] bg-[#C4C4C4] top-[560px] right-[345px] absolute'>
                        <img src="images/banner_logo.png" alt="banner_image" className='absolute top-10 left-[-80px]' />
                    </li>
                </ul>
                
                {
                    toggleForm &&
                    <ul className='flex flex-col gap-20 font-cormorant font-medium text-lg text-[#fff] leading-[26px] absolute right-[120px] top-[282px] rotate-180'>
                        <a href='#' className='hover:text-shenapoti duration-300 rotate-90'>Facebook</a>
                        <a href='#' className='hover:text-shenapoti duration-300 rotate-90'>Twitter</a>
                        <a href='#' className='hover:text-shenapoti duration-300 rotate-90'>Instagram</a>
                        <a href='#' className='hover:text-shenapoti duration-300 rotate-90'>Linkedin</a>
                    </ul>
                }
            </section>
        </>
    )
}

export default Banner