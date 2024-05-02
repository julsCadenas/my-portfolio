import gwacalc from '../images/gwacalc.png';
import aaipsd from '../images/aaipsd.png';
import icare from '../images/icare.png';
import lrt from '../images/lrt.png'; 

const Proj = () => {
    return (
        <div className="projcontainer" id="projects">
            <div className="projtitle"><strong>Projects</strong></div>
            <div className="project-wrapper">
                <div className='project'>
                    <div className='gwatitle'><strong>GWA-CALCULATOR</strong></div>
                    <a href='https://julscadenas.github.io/gwa-calculator/' target='_blank' className="gwacalc">
                        <div className="icon-wrapper">
                            <i className="devicon-github-original"></i>
                        </div>
                        <img src={gwacalc} alt="GWA Calculator"></img>
                    </a>
                </div>
                <div className='project'>
                    <div className='gwatitle'><strong>PHOTOGRAPHY PORTFOLIO</strong></div>
                    <a href='https://aai-psd.vercel.app/' target='_blank' className="gwacalc">
                        <div className="icon-wrapper">
                            <i className="devicon-github-original"></i>
                        </div>
                        <img src={aaipsd} alt="Photography Portfolio"></img>
                    </a>
                </div>
                <div className='project'>
                    <div className='gwatitle'><strong>iCARE WEBSITE</strong></div>
                    <a href='https://github.com/julsCadenas/iCARE-Website' target='_blank' className="gwacalc">
                        <div className="icon-wrapper">
                            <i className="devicon-github-original"></i>
                        </div>
                        <img src={icare} alt="iCare"></img>
                    </a>
                </div>
                <div className='project'>
                    <div className='gwatitle'><strong>LRT SYSTEM</strong></div>
                    <a href='https://github.com/julsCadenas/lrtProject' target='_blank' className="gwacalc">
                        <div className="icon-wrapper">
                            <i className="devicon-github-original"></i>
                        </div>
                        <img src={lrt} alt="LRT System"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj;
