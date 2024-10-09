import React from 'react'

const Awards = () => {
    return (
        <>
            <section className='valuable_awards py-[150px]'>
                <div className="container flex justify-end">
                    <ul className='h-[380px] flex relative'>
                        <li className='w-[314px] font-cormorant font-medium text-[80px] text-raja leading-[62px] absolute top-0 left-[-270px]'>
                            Got many valuable <span className='italic underline underline-offset-8 decoration-[5px]'>awards</span>
                        </li>
                        <li className='w-[200px] bg-[#c19d9d]'></li>
                        <li className='w-[370px] bg-[#C4C4C4]'></li>
                    </ul>
                    <ul className='w-[230px] flex flex-col justify-center ml-[60px] font-DMsans font-normal text-xl text-raja leading-[40px]'>
                        <li className='hover:font-bold hover:text-shenapoti duration-300 cursor-pointer'>2021 - The Artist Award</li>
                        <li className='hover:font-bold hover:text-shenapoti duration-300 cursor-pointer'>2020 - MKEL/Best Prir</li>
                        <li className='hover:font-bold hover:text-shenapoti duration-300 cursor-pointer'>2019 - Portrait Award</li>
                        <li className='hover:font-bold hover:text-shenapoti duration-300 cursor-pointer'>2018 - Berlin Talent</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Awards