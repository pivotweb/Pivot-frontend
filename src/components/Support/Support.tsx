// import React from 'react';

import Pconference from '/images/Pconference.png'
import './Support.css'

const Support = () => {
  return (
    <div className="support-container"> 
        <div className='support-context'>
            <h1 className='support-heading'>Your Support Can Power 3,000  <br /> Businesses</h1>
            <p className='Support-text'>When you partner with The Pivot Challenge, you’re not just writing a <br /> cheque. You’re helping real entrepreneurs access broadband, digital <br /> tools, skills training, visibility, and opportunities that change lives.</p>
        </div>

        <div>
            <img src={Pconference} alt="Pivot conference" />
        </div>

        <div className='support-context2'>
        <div className='support-content-left'>
            <div className='support-context2-text text-center md:text-start'>
                <h1 className='support-heading2'>How You Can Help</h1>
                <div className='support-text2 '>
                    <ul className='text-center flex flex-col items-center md:text-left md:block md:items-start'>
                        <li>Fund tech kits and data bundles</li>
                        <li>Sponsor mentorship cycles</li>
                        <li>Provide venues, tools and software</li>
                        <li>Underwrite the Pivot Conference showcase</li>
                    </ul>
                </div>
            </div>

            <div className='support-context3-text text-center md:text-start'>
                <h1 className='support-heading2'>Why it Matters</h1>
                <div className="De-text">
                    <p className=" md:mb-2">MSMEs make up 96% of Nigeria's businesses,</p>
                    <p className=" md:mb-2">digital exclusion is holding many of them back.</p>
                    <p className=" md:mb-2">With you, we can change that story—</p>
                     <p>starting from the ground up.</p>
                </div>
                {/* <p className='De-text'>MSMEs make up 96% of Nigeria's businesses, but <br /> digital exclusion is holding many of them back. With <br /> you, we can change that story—starting from the <br /> ground up.</p> */}
            </div>
        </div>

        <aside className='support-aside-container'>
            <div className='aside-context'>
                <button className='myBtn1 support-btn'><a href="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header">Become a Strategic Partner</a></button>
                <button className='myBtn2 support-btn'>
                <a href="tel:+2348164082120">Schedule a Call With Our Team</a>
                </button>
                <button className='myBtn2 support-btn'><a href="#">Download Our Partner Deck</a></button>
            </div>
        </aside>
    </div>

    </div>
  )
}

export default Support