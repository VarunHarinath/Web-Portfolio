import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      
      {/* Background orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-float pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      <Navbar />
      
      <main className="relative z-10 px-4 pb-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 py-10 border-t border-white/10 text-center text-slate-500 text-xs">
        <p>© 2026 Varun Harinath. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
