import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-brand-400">Journey</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A track record of delivering high-impact automation solutions across diverse industries.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2" />
              
              <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-brand-500 border-4 border-dark-800 transform md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" />

                {/* Date Side */}
                <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? 'md:text-left md:pl-10' : 'md:text-right md:pr-10'}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-dark-700 text-brand-300 text-xs font-mono mb-2">
                    {exp.period}
                  </span>
                </div>

                {/* Content Side */}
                <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:bg-dark-700/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2 md:inline-flex">
                       {exp.role}
                    </h3>
                    <div className="text-brand-400 font-medium mb-4 flex items-center gap-2 md:justify-end md:flex-row-reverse">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                    
                    <ul className={`space-y-2 text-sm text-gray-400 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                      {exp.description.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-brand-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;