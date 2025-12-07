import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-brand-500 rounded-full" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 bg-dark-800 border border-dark-700 rounded-xl flex items-center gap-3 hover:border-brand-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all group"
                >
                  <CheckCircle2 size={18} className="text-gray-600 group-hover:text-brand-400 transition-colors" />
                  <span className="font-medium text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-brand-500 rounded-full" />
              Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-r from-dark-800 to-dark-800/50 border border-dark-700 rounded-xl flex items-center gap-4 hover:border-brand-500/50 transition-all"
                >
                  <div className="p-3 bg-brand-900/50 rounded-lg text-brand-400">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert}</h3>
                    <p className="text-sm text-gray-500">Official Certification</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;