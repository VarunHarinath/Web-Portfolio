import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-6 left-0 right-0 z-[100] transition-all duration-300 px-4`}>
      <nav className={`max-w-4xl mx-auto flex items-center justify-between p-2 px-4 glass-card ${scrolled ? 'py-3' : 'py-2'}`}>
        <a href="#home" className="text-xl font-bold tracking-tighter text-gradient">
          VH
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSegment === link.href.slice(1) ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:block text-xs px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Hire Varun
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
