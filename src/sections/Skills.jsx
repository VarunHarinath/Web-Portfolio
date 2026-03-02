import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  Terminal, 
  Zap, 
  Shield, 
  Search 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend & Distributed Systems",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["Node.js", "Express", "FastAPI", "Go", "RabbitMQ", "Redis"]
    },
    {
      title: "AI Engineer Stack",
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      skills: ["RAG", "LangChain", "OpenAI API", "Whisper", "Pinecone", "Groq"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Mastered <span className="text-gradient">Abilities</span></h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          A curated selection of technologies I use to build production-scale intelligent systems.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <GlassCard className="h-full border-white/5 bg-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 ring-1 ring-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="group relative px-4 py-2 rounded-xl bg-slate-500/5 hover:bg-blue-500/10 border border-slate-500/10 hover:border-blue-500/30 transition-all duration-300 text-sm font-medium"
                  >
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
