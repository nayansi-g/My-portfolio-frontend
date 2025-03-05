import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint (640px)
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Header />
      {portfolioData && (
        <div className={`bg-zinc-700 ${isMobile ? 'px-0 py-0' : 'px-40 py-20'}`}>
          <section id="home"><Intro /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;


