import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Skills = () => {
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
            transition: 'none',
        },
    }));

    return (
        <div id="skills" className="max-h-fit py-48 font-Poppins text-white bg-black flex flex-col justify-center items-center">
            <div className="text-2xl md:text-4xl mb-14 md:mb-20">
                <p><strong>Skills & Tools</strong></p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-7xl md:text-9xl px-5 max-w-7xl">
                <BootstrapTooltip title="C++">
                    <i className="devicon-cplusplus-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Python">
                    <i className="devicon-python-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Java">
                    <i className="devicon-java-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="HTML5">
                    <i className="devicon-html5-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="CSS3">
                    <i className="devicon-css3-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="JavaScript">
                    <i className="devicon-javascript-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="PHP">
                    <i className="devicon-php-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Amazon Web Services">
                    <i className="devicon-amazonwebservices-plain-wordmark transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="React">
                    <i className="devicon-react-original transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Node JS">
                    <i className="devicon-nodejs-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Arduino">
                    <i className="devicon-arduino-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Git">
                    <i className="devicon-git-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="GitHub">
                    <i className="devicon-github-original transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="SQL">
                    <i className="devicon-sqldeveloper-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="SQLite">
                    <i className="devicon-sqlite-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Bash">
                    <i className="devicon-bash-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Figma">
                    <i className="devicon-figma-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Firebase">
                    <i className="devicon-firebase-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Tailwind">
                    <i className="devicon-tailwindcss-original transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Tensorflow">
                    <i className="devicon-tensorflow-original transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="OpenCV">
                    <i className="devicon-opencv-plain transition-transform duration-300 ease-in-out transform hover:scale-125"></i>
                </BootstrapTooltip>
            </div>
        </div>
    )
}

export default Skills;
