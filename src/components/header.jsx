import React from 'react';

const Header = () => {
    const [mode, setMode] = React.useState("dark");

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

    const setDarkMode = () => {
         document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleMode = (e) => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        document.querySelector("body").setAttribute('data-theme', newMode);
    }

    return (
        <header class="headercontainer">
            <div class="navbar">
                <ul class="name">
                    <li><a href="#">Julian Cadenas</a></li>
                </ul>
                <ul class="links">
                    <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#" onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a className="toggle" onClick={toggleMode}>{mode === "dark" ? "Light" : "Dark"}</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;

