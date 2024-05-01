import myphoto from '../../src/images/myphoto.png';


const About = () => {

    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div class="aboutcontainer">
            <div className='infocontainer'>
                <div className='title'>About Me</div>
                <div className='myname'>Julian Cadenas</div>
                <div className='course'>BS Computer Engineering</div>
                <div className='bio'>{bio}</div>
                <button class="resumeBtn">RESUME</button>
            </div>
            <div className='imagecontainer'>
                <img src={myphoto}/>
            </div>
        </div>
    )
}

export default About;