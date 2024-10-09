import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CommonLinks = ({LinksName}) => {
    return (
        <>
            <button className='font-inter font-semibold text-lg text-shenapoti leading-[36px] flex gap-2 items-center'>{LinksName}<FaArrowRightLong /></button>
        </>
    )
}

export default CommonLinks