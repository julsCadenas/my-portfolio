import myphoto from '../../src/images/myphoto.png';
import React, { useEffect, useState } from 'react';


const About = () => {
    const [displayText, setDisplayText] = useState('');
    const originalText = "Julian Cadenas";

    const startAnimation = () => { 
        let index = 0;
    
        const intervalId = setInterval(() => {
            if (index <= originalText.length) {
                setDisplayText(originalText.substring(0, index));
                index++;
            }
    
            if (index > originalText.length) {
                clearInterval(intervalId);
            }
        }, 100); 
    
        return () => clearInterval(intervalId);
    };

    const handleNameClick = () => {
        startAnimation();
    };

    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div class="aboutcontainer">
            <div className='infocontainer'>
                <div className='title' id='about'>About Me</div>
                <div className='myname' onClick={startAnimation}>{displayText || originalText}</div>
                <div className='course'>BS Computer Engineering</div>
                <div className='bio'>{bio}</div>
                <button class="resumeBtn">RESUME</button>
            </div>
            <div className='imagecontainer'>
                <img src={myphoto}/>
            </div>
        </div>
    )
}

export default About;