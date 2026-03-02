import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ragImg from '../assets/rag_preview.png';
import cloudImg from '../assets/cloud_preview.png';

const Projects = () => {
  const projects = [
    {
      title: "AI Research Assistant",
      description: "A distributed microservices architecture for automated research summarization and intelligent data processing.",
      impact: "Leveraged RabbitMQ and Node.js to achieve real-time document indexing and summarization.",
      tech: ["Python", "LangChain", "RabbitMQ", "Node.js", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
      github: "https://github.com/VarunHarinath/AI-Research-Assistant",
      demo: "#"
    },
    {
      title: "EventAura",
      description: "Full-stack event management platform designed for scaling community engagement and booking workflows.",
      impact: "Architected a scalable MongoDB/Node.js backend deployed via GCP and Docker.",
      tech: ["React", "Node.js", "Express", "MongoDB", "GCP", "Docker"],
      image: cloudImg,
      github: "https://github.com/VarunHarinath/EventAura",
      demo: "#"
    },
    {
      title: "Intelligent Nutrition System",
      description: "Personalized nutrition planning platform leveraging intelligent algorithms for dietary recommendations.",
      impact: "Implemented advanced TS/Next.js frontend with seamless AI model integration.",
      tech: ["TypeScript", "Next.js", "AI Models", "Tailwind", "Framer Motion"],
      image: ragImg,
      github: "https://github.com/VarunHarinath/Intelligent-Nutrition-Recommendation-System",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            Production-grade systems architected for performance, scalability, and impact.
          </p>
        </div>
        <a href="https://github.com/VarunHarinath" className="text-blue-500 font-semibold flex items-center gap-2 hover:underline">
          View all on GitHub <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col group border-white/5 bg-white/5">
              <div className="relative aspect-video rounded-xl mb-6 overflow-hidden bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 mb-6">
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-tighter mb-1">Measured Impact</p>
                  <p className="text-xs text-slate-400 font-medium">{project.impact}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-slate-500/10 border border-slate-500/20 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
