import React from 'react'
import me from './images/hiking-removebg-preview.png'
import certificate from './images/certificate.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={me} alt='me' />
                <img src={certificate} alt="certificate" className='certificate'/>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p>
            I'm confident, naturally curious, and perpetually working on
            improving my chops, one design problem at a time. In my free time I enjoy
             creating music, going on hikes, and enjoying the outdoors.

            </p>
          
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About
