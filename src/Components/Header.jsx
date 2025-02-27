
import image from "./my-image.jpg"
import React, { useState, useEffect } from 'react';
import './Header.css';
import { useCallback } from "react";
import { Link } from 'react-scroll';

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentSection, setCurrentSection] = useState("home"); 

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setCurrentSection(section.id);
      }
    });

    setActiveSection(currentSection);
  }, [currentSection]); 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="header bg-gray-900">
      <div className="logo flex items-center space-x-2">
        <img src={image} alt="Logo" className="h-9 w-8 rounded-full" />
        <span className="text-lg text-orange-500 text-3xl font-[700]">PORTFOLIO</span>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <Link 
                to={section} 
                activeClass="active" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={`${currentSection === section ? "active" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};


export default Header;

