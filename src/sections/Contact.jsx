import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GlassCard className="p-8 md:p-12 text-center border-blue-500/20 shadow-2xl shadow-blue-500/5">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Let’s Build Something <span className="text-gradient">Impactful.</span></h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            Available for consulting, fullscale architecture design, or leading engineering teams for ambitious startups.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full bg-slate-500/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-slate-500/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <textarea 
                placeholder="Message"
                rows={4}
                className="w-full bg-slate-500/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
              <button className="w-full btn-glass flex items-center justify-center gap-2 group !rounded-xl !py-4">
                Send Transmission
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex flex-col justify-center items-center md:items-start text-left gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Direct Link</h4>
                <a href="mailto:varun@example.com" className="text-xl font-bold flex items-center gap-3 hover:text-blue-500 transition-colors">
                  <Mail className="w-6 h-6" />
                  varun@example.com
                </a>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Network</h4>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/varun-harinath/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-500/5 hover:bg-blue-500/10 border border-white/10 transition-all hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/VarunHarinath" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-500/5 hover:bg-slate-300/10 border border-white/10 transition-all hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "The best way to predict the future is to build it."
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Contact;
