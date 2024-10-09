import React from 'react'
import CommonLinks from '../../Commons/CommonLinks'
import { Link } from 'react-router-dom'

const Memorable = () => {
    return (
        <>
            <section className='memorable py-[150px]'>
                <div className="container flex items-center gap-[100px]">
                    <ul className='w-[670px] h-[500px] bg-[#C4C4C4] relative'>
                        <li className='w-[230px] h-full bg-[#b80101] absolute top-0 right-[158px]'></li>
                    </ul>
                    <ul className='w-[570px]'>
                        <li className='w-[400px] font-cormorant font-medium text-[64px] text-raja leading-[54px]'>Ready to make your <span className='italic underline underline-offset-8 decoration-4'>moment memorable?</span></li>
                        <li className='flex justify-between items-end mt-8'>
                            <Link to={"#"} className='border-b-2 border-shenapoti'>
                                <CommonLinks LinksName={"Book Now"} />
                            </Link>
                            <ul className='font-inter font-semibold text-lg text-raja leading-[36px]'>
                                <li className=' underline underline-offset-4 decoration-2'>514 905 9958</li>
                                <li className=' underline underline-offset-4 decoration-2'>hello@support.com</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Memorable