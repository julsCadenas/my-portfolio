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
        image: gwacalc,
        alt: 'GWA Calculator'
    },
    {
        title: 'PHOTOGRAPHY PORTFOLIO',
        link: 'https://aai-psd.vercel.app/',
        image: aaipsd,
        alt: 'Photography Portfolio'
    },
    {
        title: 'iCARE WEBSITE',
        link: 'https://github.com/julsCadenas/iCARE-Website',
        image: icare,
        alt: 'iCare'
    },
    {
        title: 'LRT SYSTEM',
        link: 'https://github.com/julsCadenas/lrtProject',
        image: lrt,
        alt: 'LRT System'
    },
    {
        title: 'Anime Finder',
        link: 'https://myanifinder.vercel.app/',
        image: anifind,
        alt: 'Anime Finder'
    },
    {
        title: 'Clock Extension',
        link: 'https://github.com/julsCadenas/clockhome',
        image: clock,
        alt: 'Clock Extension'
    },
    {
        title: 'FEU Tech Library',
        link: 'https://github.com/julsCadenas/fitlib',
        image: fitlib,
        alt: 'FEU Tech Library'
    }
];

const Proj = () => {
    return (
        <div className="max-h-fit font-Poppins flex flex-col justify-center items-center bg-white text-black dark:bg-black dark:text-white" id="projects">
            <div className="text-2xl md:text-4xl mb-14 md:mb-16"><strong>Projects</strong></div>
            <div className="flex flex-wrap justify-center gap-10 max-w-7xl transition-all">
                {projects.map((project, index) => (
                    <div className='flex flex-col justify-center items-center w-72 md:w-96' key={index}>
                        <div className='text-center text-lg md:text-xl lg:text-2xl mb-4'>
                            <strong>{project.title}</strong>
                        </div>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <img className='w-full h-40 md:h-60 object-cover shadow-lg rounded-3xl' src={project.image} alt={project.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Proj;

