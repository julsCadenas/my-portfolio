import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const skills = [
    { title: 'C++', iconClass: 'devicon-cplusplus-plain' },
    { title: 'Python', iconClass: 'devicon-python-plain' },
    { title: 'Java', iconClass: 'devicon-java-plain' },
    { title: 'HTML5', iconClass: 'devicon-html5-plain' },
    { title: 'CSS3', iconClass: 'devicon-css3-plain' },
    { title: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { title: 'PHP', iconClass: 'devicon-php-plain' },
    { title: 'Amazon Web Services', iconClass: 'devicon-amazonwebservices-plain-wordmark' },
    { title: 'React', iconClass: 'devicon-react-original' },
    { title: 'Node JS', iconClass: 'devicon-nodejs-plain' },
    { title: 'Arduino', iconClass: 'devicon-arduino-plain' },
    { title: 'Git', iconClass: 'devicon-git-plain' },
    { title: 'GitHub', iconClass: 'devicon-github-original' },
    { title: 'SQL', iconClass: 'devicon-sqldeveloper-plain' },
    { title: 'SQLite', iconClass: 'devicon-sqlite-plain' },
    { title: 'Bash', iconClass: 'devicon-bash-plain' },
    { title: 'Figma', iconClass: 'devicon-figma-plain' },
    { title: 'Firebase', iconClass: 'devicon-firebase-plain' },
    { title: 'Tailwind', iconClass: 'devicon-tailwindcss-original' },
    { title: 'Tensorflow', iconClass: 'devicon-tensorflow-original' },
    { title: 'OpenCV', iconClass: 'devicon-opencv-plain' }
];

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
        <div id="skills" className="max-h-fit py-48 font-Poppins text-black bg-white dark:text-white dark:bg-black flex flex-col justify-center items-center">
            <div className="text-2xl md:text-4xl mb-14 md:mb-20">
                <p><strong>Skills & Tools</strong></p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-7xl md:text-9xl px-5 max-w-7xl transition-all">
                {skills.map((skill, index) => (
                    <BootstrapTooltip key={index} title={skill.title}>
                        <i className={`${skill.iconClass} transition-transform ease-in-out transform hover:scale-125`}></i>
                    </BootstrapTooltip>
                ))}
            </div>
        </div>
    )
}

export default Skills;
