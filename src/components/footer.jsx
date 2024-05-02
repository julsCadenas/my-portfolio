import React, { useEffect, useState } from 'react';

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

    const handleNameClick = () => {
        startAnimation();
    };
    return (
        <footer className="footercontainer" id="footer">
            <p className="contacttitle"><strong>Contact Me:</strong></p>
            <div className="contacticons">
                <a href="https://github.com/julsCadenas"><i class="devicon-github-original"></i></a>  
                <a href="https://www.linkedin.com/in/Julian-Cadenas/"><i class="devicon-linkedin-plain"></i></a>
                <a href="https://github.com/julsCadenas"><span class="material-symbols-outlined">mail</span></a>
            </div>
            <p className="email" onClick={startAnimation}><strong>{displayText || originalText}</strong></p>
        </footer>
    )
}

export default Footer;