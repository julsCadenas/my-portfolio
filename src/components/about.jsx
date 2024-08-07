import myphoto from '../../src/images/myphoto.png';
import React, { useState } from 'react';
import resume from '../files/Julian-Sebastian-Cadenas-Resume.pdf';

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

    // const handleNameClick = () => {
    //     startAnimation();
    // };                                                                                                                          

    // const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const bio2 = "Currently pursuing a Bachelor's degree in Computer Engineering at Far Eastern University - Institute of Technology, I am a driven individual with a passion for software development. As a Scholar, I maintain a specific GPA every trimester, showcasing my dedication to academic excellence."

    return (
        <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-white text-black dark:bg-black dark:text-white font-Poppins py-28">
            <div className='md:order-2 flex-shrink-0'>
                <img className='w-64 cmd:w-[500px] h-auto md:my-0 my-5' id='about' src={myphoto} alt='Profile of Juls' />
            </div>
            <div className='md:order-1 text-left px-7 md:px-0 ml-0 md:ml-5 flex-shrink-0'>
                <div className='font-bold text-xl cmd:text-4xl pb-1 text-left' id='about'>About Me</div>
                <div className='font-bold text-3xl cmd:text-7xl pb-1 hover:scale-110 transition-all cursor-pointer' onClick={startAnimation}>{displayText || originalText}</div>
                <div className='font-bold text-xl cmd:text-5xl pb-2'>BS Computer Engineering</div>
                <div className='text-base cmd:text-2xl w-72 cmd:w-[600px] text-justify md:text-left'>{bio2}</div>
                <a href={resume} download='Julian-Sebastian-Cadenas-Resume.pdf'>
                    <button className="bg-black text-white dark:bg-white dark:text-black rounded-2xl cmd:rounded-3xl font-bold w-44 cmd:w-64 h-11 cmd:h-16 text-3xl cmd:text-5xl mt-5 transition-transform transform hover:scale-110">RESUME</button>
                </a>
            </div>
        </div>
    )
}

export default About;
