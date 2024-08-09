import React, { useState ,useEffect } from 'react';
import { SunMoon } from 'lucide-react';

const Header = () => {
    const [mode, setMode] = useState("dark");

    const scrollToSection = (id, event , offset) => {
        event.preventDefault();
        const element = document.getElementById(id);
        // const offset = 0;
        const offsetPosition = element.offsetTop - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };


    useEffect(() => {
      const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme) {
          setMode(selectedTheme);
          document.querySelector("body").setAttribute('data-theme', selectedTheme);
        }
    }, []); 
  
    const selectedTheme = localStorage.getItem("selectedTheme");
  
    const toggleMode = () => {
      const newMode = mode === "dark" ? "light" : "dark";
      setMode(newMode);
      localStorage.setItem("selectedTheme", newMode)
      document.querySelector("body").setAttribute('data-theme', newMode);
    }


    return (
        <header className="flex flex-col lg:flex-row items-center justify-between p-5 md:p-10 lg:px-44 bg-white text-black dark:bg-black dark:text-white font-Poppins font-bold transition-all" id="header">
            <div className="text-3xl hover:text-4xl transition-all mb-4 lg:mb-0">
                <p className='cursor-pointer' onClick={(e) => scrollToSection('about', e)}>Julian Cadenas</p>
            </div>
            <nav className="flex flex-row items-center text-lg md:text-2xl mt-1 md:mt-0">
                <ul className="flex flex-row space-x-5 md:space-x-10 ">
                    <li><button onClick={(e) => scrollToSection('about', e, 0)} className="hover:text-3xl transition-all cursor-pointer">About</button></li>
                    <li><button onClick={(e) => scrollToSection('skills', e, -100)} className="hover:text-3xl transition-all cursor-pointer">Skills</button></li>
                    <li><button onClick={(e) => scrollToSection('projects', e, 0)} className="hover:text-3xl transition-all cursor-pointer">Projects</button></li>
                    <li><button onClick={(e) => scrollToSection('footer', e, 0)} className="hover:text-3xl transition-all cursor-pointer">Contact</button></li>
                </ul>
            </nav>
            <button className="fixed bottom-8 right-8 md:bottom-10 md:right-10 w-12 md:w-14 text-black dark:text-white" onClick={toggleMode} defaultChecked={selectedTheme === "dark"}>
                <SunMoon style={{ width: '100%', height: '100%' }} />
            </button>
        </header>
    );
};

export default Header;
