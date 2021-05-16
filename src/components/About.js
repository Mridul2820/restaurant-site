import React from 'react'
import aboutImage from '../assets/about.png'

const About = () => {
    return (
        <div id="about">
            <div className="about-text">
                <h1>Upcoming Event</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi asperiores rem odit excepturi! Non consectetur, veniam, a iure praesentium </p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="about" />
            </div>
        </div>
    )
}

export default About
