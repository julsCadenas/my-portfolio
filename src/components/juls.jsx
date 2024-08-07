import React, { useEffect, useState } from 'react';

const Juls = () => {
    const [displayHiImText, setDisplayHiImText] = useState('');
    const [displayJulsText, setDisplayJulsText] = useState('');
    const originalHiImText = "HI, IM ";
    const originalJulsText = "JULIAN";

    const startAnimation = () => {
        let hiImIndex = 0;
        let julsIndex = 0;
    
        const intervalId = setInterval(() => {
            if (hiImIndex <= originalHiImText.length) {
                setDisplayHiImText(originalHiImText.substring(0, hiImIndex));
                hiImIndex++;
            }
    
            if (hiImIndex > originalHiImText.length && julsIndex <= originalJulsText.length) {
                setDisplayJulsText(originalJulsText.substring(0, julsIndex));
                julsIndex++;
            }
    
            if (hiImIndex > originalHiImText.length && julsIndex > originalJulsText.length) {
                clearInterval(intervalId);
            }
        }, 100); 
    
        return () => clearInterval(intervalId);
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const handleReplayAnimation = () => {
        setDisplayHiImText('');
        setDisplayJulsText('');
        startAnimation();
    };

    return (
        <div 
            className="h-screen flex justify-center items-center md:py-[450px] bg-white text-black dark:bg-black dark:text-white -mt-32 font-Poppins"
            
        >
            <p className="text-7xl md:text-8xl flex items-center flex-col md:flex-row space-x-0 md:space-x-6 hover:scale-110 transition-all cursor-pointer" 
            onClick={handleReplayAnimation}>
                <span className=''>{displayHiImText}</span>
                <span className="ml-2 font-bold">{displayJulsText}</span>
            </p>
        </div>
    );
}

export default Juls;
