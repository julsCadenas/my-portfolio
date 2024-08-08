import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Footer = () => {
    const [displayText, setDisplayText] = useState('');
    const originalText = "jscadenas12@gmail.com";

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

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(originalText).then(() => {
        }).catch((error) => {
            console.error('Failed to copy email: ', error);
        });
    };

    const handleNameClick = () => {
        startAnimation();
        copyEmailToClipboard();
    };

    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: '#1E1E1E',
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#1E1E1E',
            color: '#F3F4E5', 
            fontSize: '16px', 
            borderRadius: '8px', 
            padding: '8px 16px', 
        },
    }));

    const [BackToTopButton, setBackToTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    },[]);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    
    return (
        <footer className="flex justify-center items-center flex-col bg-black text-white font-Poppins py-80 space-y-1" id="footer">
            <p className="text-5xl md:text-8xl"><strong>Contact Me:</strong></p>
            <div className="flex items-center space-x-3 md:space-x-5 text-7xl md:text-9xl">
                <a className='hover:scale-110 transition-all' href="https://github.com/julsCadenas" target='_blank'><i className="devicon-github-original"></i></a>  
                <a className='hover:scale-110 transition-all' href="https://www.linkedin.com/in/Julian-Cadenas/" target='_blank'><i className="devicon-linkedin-plain "></i></a>
                <a href="mailto:jscadenas12@gmail.com" target='_blank'><span className="material-symbols-outlined text-8xl md:text-[160px] font-semibold hover:scale-110 transition-all">mail</span></a>
            </div>
            <BootstrapTooltip title="Click to copy">
                <p className="text-2xl md:text-4xl" onClick={handleNameClick}><strong>{displayText || originalText}</strong></p>
            </BootstrapTooltip>
            <a href="#" onClick={scrollUp} className=''><span className="material-symbols-outlined text-7xl md:text-9xl font-bold mt-5 hover:scale-125 transition-all">keyboard_arrow_up</span></a>
        </footer>
    );
};

export default Footer;
