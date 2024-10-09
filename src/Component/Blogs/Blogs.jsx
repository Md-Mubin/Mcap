import React from 'react'
import { Link } from 'react-router-dom'
import CommonLinks from '../../Commons/CommonLinks'
import CommonBlogs from '../../Commons/CommonBlogs'

const Blogs = () => {
    return (
        <>
            <section className='Blog mb-[99px]'>
                <div className="container">
                    <ul className='flex justify-between items-center'>
                        <li className='font-cormorant font-medium text-[80px] text-right leading-[70px]'>Latest <span className='italic underline underline-offset-4 decoration-2'>blog</span></li>
                        <Link to={"#"} className='border-b-2 border-shenapoti'>
                            <CommonLinks LinksName={"View All Blog"} />
                        </Link>
                    </ul>
                    <ul className='mt-12 flex gap-[130px] items-center'>
                        <li className='flex flex-col gap-12'>
                            <CommonBlogs date={"05 Feb, 2022"} minutes={"5 minutes"} infos={"Speech has never been free, and that's good"} />
                            <CommonBlogs date={"05 Feb, 2022"} minutes={"5 minutes"} infos={"Speech has never been free, and that's good"} />
                        </li>
                        <CommonBlogs date={"05 Feb, 2022"} infos={"Speech has never been free, and that's good"} sizes={"w-[570px] h-[480px]"} fontInfo={"text-[40px] w-[508px] leading-[46px]"}/>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Blogs