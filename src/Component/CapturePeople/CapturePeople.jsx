import React from 'react'
import { GiHand } from 'react-icons/gi'

const CapturePeople = () => {
    return (
        <>
        <section className='capture_people'>
            <div className="container">
                <ul className='flex justify-between'>
                    <li className='w-[496px]'>
                        <h2 className='font-cormorant font-medium text-[80px] text-raja leading-[62px]'>I enjoy <span className='italic underline underline-offset-8 decoration-[5px]'>capturing</span> people</h2>
                        <p className='font-oswald font-semibold text-2xl text-raja mt-12 ml-[200px]'>-Ellina mary</p>
                        <p className='w-[370px] h-[350px] bg-[#C4C4C4] mt-[69px]'></p>
                    </li>
                    <li className='h-[550px] flex'>
                        <p className='w-[460px] bg-[#C4C4C4] relative'>
                            <img src="images/contact_imagelogo.png" alt="contact_imagelogo" className='absolute bottom-[60px] left-[-80px]' />
                        </p>
                        <p className='w-[310px] bg-[#b80101]'></p>
                    </li>
                </ul>
                <ul className='mt-[60px] flex justify-end items-start'>
                    <li className='flex items-center gap-4'>
                        <h3 className='font-cormorant font-bold text-2xl text-raja leading-[34px]'>Hi there!</h3>
                        <GiHand className='text-4xl text-[#FFDD67] rotate-[15deg] scale-x-[-1]'/>
                    </li>
                    <li className='w-[432px] font-DMsans font-normal text-xl text-raja leading-[32px] ml-[30px] mr-[70px]'>
                    You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.
                    </li>
                    <li className='w-[320px] font-DMsans font-normal text-xl text-raja leading-[32px]'>
                    You can customize a template or make your own from scratch, with an immersive library at your disposal.
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default CapturePeople