import React from 'react'
import { useSelector } from 'react-redux'
import './Banner.css'

const Banner = () => {

    const toggleForm = useSelector((state) => state.counter.value)

    return (
        <>
            <section className='bannerSection'>
                <div className="container">
                    <div className="headRow">
                        <h1>Love to <span>capture</span> the best <span>moments</span></h1>
                        <p>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
                    </div>

                    <div className="bannerExtraPart">
                        <ul className='signature'>
                            <h2>Elliana Mary</h2>
                            <li>Professional Photographer</li>
                        </ul>
                        <ul className='boxPart'>
                            <li className='emptyBox'></li>
                            <li><img src="images/banner_logo.png" alt="banner_extra_logo" /></li>
                        </ul>
                    </div>
                </div>
                
                {
                    toggleForm &&
                    <ul className='toogleBar'>
                        <a href='#'>Facebook</a>
                        <a href='#'>Twitter</a>
                        <a href='#'>Instagram</a>
                        <a href='#'>Linkedin</a>
                    </ul>
                }
            </section>
        </>
    )
}

export default Banner