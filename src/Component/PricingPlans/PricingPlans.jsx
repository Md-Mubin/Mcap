import React from 'react'
import { Link } from 'react-router-dom'
import CommonLinks from '../../Commons/CommonLinks'
import CommonPlans from '../../Commons/CommonPlans'

const PricingPlans = () => {
    return (
        <>
            <section className='pricing_plans'>
                <div className="container">
                    <h2 className='w-[361px] m-auto font-cormorant font-medium text-[80px] text-raja leading-[70px]'>Affordable <span className='italic underline underline-offset-8 decoration-[5px]'>pricing plan</span></h2>
                    <ul className='flex justify-center mt-16'>
                        <li className='pr-10 pb-12 border-r border-b border-raja'>
                            <ul className='flex justify-between'>
                                <CommonPlans plans={"Maternity"}/>
                                <li className='font-cormorant font-bold italic text-[40px] text-shenapoti leading-[40px]'>$500</li>
                            </ul>
                            <ul className='mt-5'>
                                <p className='w-[445px] font-DMsans font-normal text-lg text-raja leading-[28px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <Link to={"#"} className='mt-6 flex'>
                                    <CommonLinks LinksName={"Book Now"} />
                                </Link>
                            </ul>
                        </li>
                        <li className='pl-10 pb-12 border-b border-raja'>
                            <ul className='flex justify-between'>
                            <CommonPlans plans={"Portrait"}/>
                            <li className='font-cormorant font-bold italic text-[40px] text-shenapoti leading-[40px]'>$500</li>
                            </ul>
                            <ul className='mt-5'>
                                <p className='w-[445px] font-DMsans font-normal text-lg text-raja leading-[28px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <Link to={"#"} className='mt-6 flex'>
                                    <CommonLinks LinksName={"Book Now"} />
                                </Link>
                            </ul>
                        </li>
                    </ul>
                    <ul className='flex justify-center'>
                        <li className='pr-10 pt-12 border-r border-raja'>
                            <ul className='flex justify-between'>
                            <CommonPlans plans={"Travel"}/>
                                <li className='font-cormorant font-bold italic text-[40px] text-shenapoti leading-[40px]'>$500</li>
                            </ul>
                            <ul className='mt-5'>
                                <p className='w-[445px] font-DMsans font-normal text-lg text-raja leading-[28px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <Link to={"#"} className='mt-6 flex'>
                                    <CommonLinks LinksName={"Book Now"} />
                                </Link>
                            </ul>
                        </li>
                        <li className='pl-10 pt-12 '>
                            <ul className='flex justify-between'>
                            <CommonPlans plans={"Weeding"}/>
                                <li className='font-cormorant font-bold italic text-[40px] text-shenapoti leading-[40px]'>$500</li>
                            </ul>
                            <ul className='mt-5'>
                                <p className='w-[445px] font-DMsans font-normal text-lg text-raja leading-[28px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                                <Link to={"#"} className='mt-6 flex'>
                                    <CommonLinks LinksName={"Book Now"} />
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PricingPlans