import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const About = () => {
  const techStack = [
    { name: 'Frontend', skills: ['React', 'Next.js', 'Typescript', 'Tailwind', 'Framer Motion'] },
    { name: 'Backend', skills: ['Node.js', 'Python', 'Go', 'FastAPI', 'Spring Boot'] },
    { name: 'AI/ML', skills: ['RAG', 'LangChain', 'OpenAI', 'Pinecone', 'Whisper', 'TTS'] },
    { name: 'Cloud & Systems', skills: ['AWS', 'Docker', 'Kubernetes', 'RabbitMQ', 'Redis'] },
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Building AI | Crafting Code | Scaling Systems.</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-4 text-lg">
            I'm a Senior CS student at Pittsburg State University with a passion for architecting intelligent, distributed systems.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-4 text-lg">
            My work revolves around the intersection of RAG-driven AI microservices and world-class, fluid user experiences. Founder of **EventAura**.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            I thrive on decoding complexity—from RabbitMQ-powered pipelines to responsive, motion-rich frontends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="border-blue-500/20">
            <h3 className="text-xl font-bold mb-6 text-gradient">Tech Ecosystem</h3>
            <div className="space-y-6">
              {techStack.map((category) => (
                <div key={category.name}>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{category.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium hover:border-blue-500/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
