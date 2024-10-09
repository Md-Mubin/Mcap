import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CommonLinks from '../../Commons/CommonLinks'

const Clients = () => {
    return (
        <>
            <section className='clients py-[150px]'>
                <div className="container">
                    <ul className='flex justify-between items-end'>
                        <li className='w-[495px] font-cormorant font-medium text-[80px] text-raja leading-[70px]'>Lovely <span className='italic underline underline-offset-8 decoration-[5px]'>words</span> from my clients</li>

                        <Link to={"#"} className='border-b-2 border-shenapoti'>
                            <CommonLinks LinksName={"View All Reviews"} />
                        </Link>
                    </ul>
                    <ul className='mt-12 flex justify-evenly'>
                        <li className='w-[370px] h-[450px] bg-[#C4C4C4] relative'>
                            <span className='flex gap-3 absolute bottom-[-48px] left-[50%] translate-x-[-50%]'>
                                <FaCircle className='text-sm text-[#dad9da]' />
                                <FaCircle className='text-md text-raja' />
                                <FaCircle className='text-sm text-[#dad9da]' />
                            </span>
                        </li>
                        <li className='w-[500px]'>
                            <p className='font-DMsans font-normal text-2xl text-raja leading-[40px]'>"<span className='font-medium'>Jenifer Lofez</span> is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive, My entire family was impressed by her and photographs.</p>

                            <p className='font-oswald font-semibold text-2xl text-raja mt-10'>-Jason & Guidry</p>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Clients