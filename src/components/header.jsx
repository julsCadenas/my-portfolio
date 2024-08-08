import React, { useEffect } from 'react';
import { SunMoon } from 'lucide-react';

const Header = () => {
    const scrollToSection = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const offset = 75;
        const offsetPosition = element.offsetTop - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const [mode, setMode] = React.useState("dark");

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme) {
            setMode(selectedTheme);
            document.querySelector("body").setAttribute('data-theme', selectedTheme);
        }
    }, []); 
  
    const toggleMode = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        localStorage.setItem("selectedTheme", newMode);
        document.querySelector("body").setAttribute('data-theme', newMode);
    };

    return (
        <header className="flex flex-col lg:flex-row items-center justify-between p-10 lg:px-44 bg-black text-white font-Poppins font-bold" id="header">
            <div className="text-3xl hover:text-4xl transition-all mb-4 lg:mb-0">
                <a href="#" onClick={(e) => scrollToSection('about', e)}>Julian Cadenas</a>
            </div>
            <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-10 text-2xl">
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
                    <li><a href="#" onClick={(e) => scrollToSection('about', e)} className="hover:text-3xl transition-all">About</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection('skills', e)} className="hover:text-3xl transition-all">Skills</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection('projects', e)} className="hover:text-3xl transition-all">Projects</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection('footer', e)} className="hover:text-3xl transition-all">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
