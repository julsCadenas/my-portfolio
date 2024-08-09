import React, { useState } from 'react';
import gwacalc from '../images/gwacalc.png';
import aaipsd from '../images/aaipsd.png';
import icare from '../images/icare.png';
import lrt from '../images/lrt.png'; 
import anifind from '../images/anifind.png';
import clock from '../images/clock.png';
import fitlib from '../images/fitlibrary.png';

const projects = [
    {
        title: 'GWA-CALCULATOR',
        link: 'https://julscadenas.github.io/gwa-calculator/',
        repoLink: 'https://github.com/julsCadenas/gwa-calculator',
        image: gwacalc,
        alt: 'GWA Calculator'
    },
    {
        title: 'PHOTOGRAPHY PORTFOLIO',
        link: 'https://aai-psd.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/ave-website',
        image: aaipsd,
        alt: 'Photography Portfolio'
    },
    {
        title: 'iCARE WEBSITE',
        repoLink: 'https://github.com/julsCadenas/iCARE-Website',
        image: icare,
        alt: 'iCare'
    },
    {
        title: 'LRT SYSTEM',
        repoLink: 'https://github.com/julsCadenas/lrtProject',
        image: lrt,
        alt: 'LRT System'
    },
    {
        title: 'Anime Finder',
        link: 'https://myanifinder.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/anime-finder-2',
        image: anifind,
        alt: 'Anime Finder'
    },
    {
        title: 'Clock Extension',
        repoLink: 'https://github.com/julsCadenas/clockhome',
        image: clock,
        alt: 'Clock Extension'
    },
    {
        title: 'FEU Tech Library',
        link: 'https://fitlib-e38fb.web.app/',
        repoLink: 'https://github.com/julsCadenas/fitlib',
        image: fitlib,
        alt: 'FEU Tech Library'
    }
];

const Proj = () => {
    const [tappedIndex, setTappedIndex] = useState(null);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleImageTap = (index) => {
        setTappedIndex(tappedIndex === index ? null : index);
    };

    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
        setTimeout(() => {
            setTappedIndex(null);  
        }, 200);  
    };

    return (
        <div className="max-h-fit font-Poppins flex flex-col justify-center items-center bg-white text-black dark:bg-black dark:text-white" id="projects">
            <div className="flex items-center flex-col text-2xl md:text-4xl mb-10 md:mb-16">
                <strong>Projects</strong>
            </div>
            <div className="flex flex-wrap justify-center gap-10 max-w-7xl transition-all">
                {projects.map((project, index) => (
                    <div 
                        className='relative flex flex-col justify-center items-center w-72 md:w-96 group' 
                        key={index}
                    >
                        <div className='text-center text-lg md:text-xl lg:text-2xl mb-4'>
                            <strong>{project.title}</strong>
                        </div>
                        <div 
                            className='relative w-full h-40 md:h-60'
                            onClick={() => handleImageTap(index)}
                            style={{ cursor: 'pointer' }} 
                        >
                            <img 
                                className='w-full h-full object-cover shadow-lg rounded-3xl' 
                                src={project.image} 
                                alt={project.alt} 
                            />
                            <div 
                                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 bg-black rounded-3xl ${tappedIndex === index || 'md:group-hover:opacity-100'} ${tappedIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <a 
                                    href={project.repoLink} 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    className={`flex items-center justify-center w-full h-full text-white dark:text-black dark:bg-white rounded-3xl ${tappedIndex === index || 'md:pointer-events-auto'} ${tappedIndex !== index && 'pointer-events-none'}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    <i className='devicon-github-original text-3xl md:text-5xl mr-3' />
                                    <p className='text-xl md:text-3xl'><strong>Source Code</strong></p>
                                </a>

                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target='_blank' 
                                        rel='noopener noreferrer' 
                                        className={`flex items-center justify-center w-full h-full text-white dark:text-black dark:bg-white rounded-3xl ${tappedIndex === index || 'md:pointer-events-auto'} ${tappedIndex !== index && 'pointer-events-none'}`}
                                        onClick={() => handleButtonClick(index)}
                                    >
                                        <i className='devicon-chrome-plain text-2xl md:text-4xl mr-3' />
                                        <p className='text-xl md:text-3xl'><strong>Open Website</strong></p>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Proj;
