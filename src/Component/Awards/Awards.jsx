import React from 'react'
import './Awards.css'

const Awards = () => {
    return (
        <>
            <section className='awardsSection'>
                <div className="container">
                    <div className="awardsRow">
                        <ul className='awardsHeadRow'>
                            <li className='awardsHead'>
                                Got many valuable <span>awards</span>
                            </li>
                            <li className='box1'></li>
                            <li className='box2'></li>
                        </ul>
                        <ul className='allAwards'>
                            <li>2021 - The Artist Award</li>
                            <li>2020 - MKEL/Best Prir</li>
                            <li>2019 - Portrait Award</li>
                            <li>2018 - Berlin Talent</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Awards