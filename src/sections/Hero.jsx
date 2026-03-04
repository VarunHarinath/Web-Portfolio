import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-widest mb-6 inline-block">
          Full-Stack Engineer • AI Systems Builder • Cloud & Platform Developer
        </span>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          I Build <span className="text-gradient">Intelligent Systems</span> That Scale.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          I build and deploy distributed backend systems, developer platforms, and cloud-native applications focused on reliability, scalability, and clean architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-glass flex items-center gap-2 group">
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="/resume.pdf" 
            download="Varun_Harinath_Resume.pdf"
            className="btn-glass flex items-center gap-2 text-slate-600 dark:text-slate-300"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-20 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
