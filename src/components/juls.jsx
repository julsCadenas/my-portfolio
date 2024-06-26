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
        <div className="hicontainer" onClick={handleReplayAnimation}>
            <p data-text-value="HI, IM JULIAN">{displayHiImText}<strong>{displayJulsText}</strong></p>
        </div>
    );
}

export default Juls;
