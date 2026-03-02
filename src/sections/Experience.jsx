import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Experience = () => {
  const experiences = [
    {
      role: "Vice President — Data Analytics Club",
      company: "Pittsburg State University",
      period: "Sep 2025 – Present",
      impact: [
        "Co-lead weekly/monthly sessions on technology trends including AI, cloud, and modern software systems.",
        "Organize discussions and activities beyond traditional “data analytics” to cover broader engineering topics.",
        "Support collaborative learning through peer-led sessions and project-focused conversations."
      ]
    },
    {
      role: "Co-Founder & Lead Software Engineer",
      company: "EventAura",
      period: "Jun 2024 – Jul 2025",
      impact: [
        "Developed and deployed a full-stack event management platform using React, Node.js, and MongoDB.",
        "Architected scalable backend infrastructure deployed on Google Cloud Platform using Docker.",
        "Optimized infrastructure and caching, reducing server costs by 8% and generating ₹5,00,000+ in revenue."
      ]
    },
    {
      role: "Software Developer Mentor",
      company: "GirlScript Summer of Code",
      period: "May 2024 – Aug 2024",
      impact: [
        "Mentored and led 10+ students in full-stack development, Git workflows, and debugging practices.",
        "Improved team coding proficiency by 30% through structured reviews and pair programming."
      ]
    },
    {
      role: "React Developer Intern",
      company: "InfraBIM Techno Solutions",
      period: "May 2024 – Aug 2024",
      impact: [
        "Built a React dashboard using Redux for real-time visualization and optimized state management.",
        "Reduced API calls by 15% through efficient frontend data handling and caching strategies."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6">The <span className="text-gradient">Journey</span></h2>
        <p className="text-slate-500 dark:text-slate-400">
          Building high-impact solutions across diverse technical landscapes.
        </p>
      </div>

      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-20 hidden sm:block" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative pl-0 sm:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[10px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-500 z-10 hidden sm:block shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            
            <GlassCard className="border-white/5 bg-white/5 hover:border-blue-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-blue-500 font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-500/5 px-3 py-1 rounded-full text-xs font-bold border border-white/5 w-fit">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.impact.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
