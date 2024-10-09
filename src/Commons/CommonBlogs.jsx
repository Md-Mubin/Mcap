import React from 'react'

const CommonBlogs = ({ date, infos, sizes, minutes, fontInfo }) => {
    return (
        <>
            <ul>
                <li className={`${sizes} w-[470px] h-[250px] bg-[#C4C4C4]`}></li>
                <ul className='mt-6 list-inside list-disc font-inter font-normal text-[16px] leading-[28px] text-raja flex gap-6'>
                    <li>
                        {date}
                    </li>
                    <li>
                        {minutes}
                    </li>
                </ul>
                <li className={`${fontInfo} w-[380px] mt-2 font-cormorant font-bold text-[30px] text-raja leading-[36px]`}>{infos}</li>
            </ul>
        </>
    )
}

export default CommonBlogs