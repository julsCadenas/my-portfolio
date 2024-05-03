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
        <div id="skills" className="skillscontainer">
            <div className="skillstitle">
                <p><strong>Skills & Tools</strong></p>
            </div>
            <div className="iconscontainer">
                <BootstrapTooltip title="C++">
                    <i className="devicon-cplusplus-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Python">
                    <i className="devicon-python-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Java">
                    <i className="devicon-java-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="HTML5">
                    <i className="devicon-html5-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="CSS3">
                    <i className="devicon-css3-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="JavaScript">
                    <i className="devicon-javascript-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="PHP">
                    <i className="devicon-php-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Amazon Web Services">
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="React">
                    <i className="devicon-react-original"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Arduino">
                    <i className="devicon-arduino-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Git">
                    <i className="devicon-git-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="GitHub">
                    <i className="devicon-github-original"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="SQL">
                    <i className="devicon-sqldeveloper-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="SQLite">
                    <i className="devicon-sqlite-plain"></i>
                </BootstrapTooltip>
                <BootstrapTooltip title="Bash">
                    <i className="devicon-bash-plain"></i>
                </BootstrapTooltip>
            </div>
        </div>
    )
}

export default Skills;