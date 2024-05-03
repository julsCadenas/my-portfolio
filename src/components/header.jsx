import React, { useEffect } from 'react';
import { SunMoon } from 'lucide-react';

const Header = () => {

    const scrollToSection = (id) => {
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
  
    const selectedTheme = localStorage.getItem("selectedTheme");
  
    const toggleMode = (e) => {
      const newMode = mode === "dark" ? "light" : "dark";
      setMode(newMode);
      localStorage.setItem("selectedTheme", newMode)
      document.querySelector("body").setAttribute('data-theme', newMode);
    }

    return (
        <header class="headercontainer" id="header">
            <div class="navbar">
                <ul class="name">
                    <li><a href="#" onClick={() => scrollToSection('about')}>Julian Cadenas</a></li>
                </ul>
                <ul class="links">
                    <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#" onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a href="#" onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#" onClick={() => scrollToSection('footer')}>Contact</a></li>
                </ul>
            </div>
        <a className="toggle" onClick={toggleMode} defaultChecked={selectedTheme === "dark"}><SunMoon style={{ width: '100%', height: '100%' }} /></a>
        </header>
    )
}

export default Header;

