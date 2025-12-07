
import React from 'react';
import { motion } from 'framer-motion';
import { HIGHLIGHT_PROJECTS } from '../constants';
import { Zap } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-800 relative overflow-hidden scroll-mt-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={12} />
            Featured Work
          </div>
          <h2 className="text-4xl font-bold mb-4">Automation Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world problems solved with intelligent workflows and AI agents.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {HIGHLIGHT_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-brand-400 text-sm font-mono border border-brand-500/20 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs text-gray-300 bg-dark-700 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Airtable Gallery Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Complete Project Gallery</h2>
            <div className="h-px flex-1 bg-dark-700" />
          </div>
          
          <div className="w-full rounded-2xl overflow-hidden border border-dark-600 shadow-2xl bg-dark-900">
             <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/appanIeNDtCnSbJI8/shreQO9BbgduHvRoZ?viewControls=on" 
                frameBorder="0" 
                width="100%" 
                height="600" 
                style={{ background: 'transparent' }}
                title="Projects Gallery"
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;