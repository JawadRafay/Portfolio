import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants';
import { User, ShieldCheck, Rocket, UserPlus, Bot, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800 relative scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 text-brand-400 font-bold tracking-wider uppercase mb-4">
              <User size={18} />
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              {ABOUT_CONTENT.title}
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="p-4 bg-dark-700/50 rounded-lg border border-dark-600">
                  <ShieldCheck className="text-brand-400 mb-2" size={24} />
                  <div className="font-bold text-white">Certified Expert</div>
                  <div className="text-xs text-gray-400">Make, ClickUp & Airtable</div>
               </div>
               <div className="p-4 bg-dark-700/50 rounded-lg border border-dark-600">
                  <Rocket className="text-brand-400 mb-2" size={24} />
                  <div className="font-bold text-white">ROI Focused</div>
                  <div className="text-xs text-gray-400">Automation that pays off</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-dark-900 border border-dark-700 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-dark-900 to-dark-900" />
              
              {/* Workflow Nodes */}
              <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-6">
                
                {/* Header */}
                <div className="text-center mb-6">
                   <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Live Workflow</div>
                   <div className="flex items-center justify-center gap-2 text-brand-400 font-bold">
                      <Zap size={16} className="fill-brand-400" />
                      Intelligent Automation
                   </div>
                </div>

                {/* Node 1: Trigger */}
                <div className="relative flex items-center gap-4 p-4 rounded-xl bg-dark-800 border border-dark-600 shadow-lg z-10">
                   <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                     <UserPlus size={24} />
                   </div>
                   <div>
                     <div className="text-[10px] text-gray-500 font-mono uppercase">Input Trigger</div>
                     <div className="font-bold text-gray-200">Lead Captured</div>
                   </div>
                </div>

                {/* Connecting Line 1 */}
                <div className="absolute left-[2.25rem] top-[6.5rem] h-10 w-0.5 bg-dark-700 overflow-hidden z-0">
                   <motion.div 
                     animate={{ y: [-40, 40] }}
                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     className="w-full h-1/2 bg-gradient-to-b from-transparent to-brand-500"
                   />
                </div>

                {/* Node 2: Processing (AI) - Active State */}
                <div className="relative flex items-center gap-4 p-4 rounded-xl bg-dark-800/80 border border-brand-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] mt-4 z-10 backdrop-blur-sm">
                   <div className="absolute inset-0 bg-brand-500/5 rounded-xl animate-pulse" />
                   <div className="p-3 rounded-lg bg-brand-500/20 text-brand-400 relative">
                     <Bot size={24} />
                     <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                     </span>
                   </div>
                   <div>
                     <div className="text-[10px] text-brand-400 font-mono uppercase">AI Agent Processing</div>
                     <div className="font-bold text-white">Qualify & Nurture</div>
                   </div>
                </div>

                {/* Connecting Line 2 */}
                <div className="absolute left-[2.25rem] top-[14.5rem] h-10 w-0.5 bg-dark-700 overflow-hidden z-0">
                   <motion.div 
                     animate={{ y: [-40, 40] }}
                     transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                     className="w-full h-1/2 bg-gradient-to-b from-transparent to-brand-500"
                   />
                </div>

                {/* Node 3: Result */}
                <div className="relative flex items-center gap-4 p-4 rounded-xl bg-dark-800 border border-dark-600 shadow-lg mt-4 z-10">
                   <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                     <Database size={24} />
                   </div>
                   <div>
                     <div className="text-[10px] text-gray-500 font-mono uppercase">Action</div>
                     <div className="font-bold text-gray-200">Sync CRM & Alert</div>
                   </div>
                </div>

              </div>

              {/* Footer Status */}
              <div className="mt-auto pt-8 flex justify-between w-full px-4 text-[10px] font-mono text-gray-500 border-t border-dark-800">
                <div>UPTIME: 99.9%</div>
                <div>AVG. SPEED: 1.2s</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;