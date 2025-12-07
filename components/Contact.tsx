import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const FloatingShape = ({ className, delay = 0, type = 'box' }: { className?: string, delay?: number, type?: 'box' | 'sphere' }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  >
    {type === 'box' ? (
      <div className="w-full h-full bg-gradient-to-br from-[#b6ff85]/10 to-transparent backdrop-blur-sm border border-[#b6ff85]/20 rounded-2xl shadow-[0_0_30px_rgba(182,255,133,0.05)] transform rotate-12" />
    ) : (
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#14a800]/20 to-transparent blur-xl" />
    )}
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#051a12] pt-40 pb-20 overflow-hidden border-t border-white/5">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Shapes */}
        <FloatingShape className="top-[10%] left-[5%] w-24 h-24" delay={0} />
        <FloatingShape className="bottom-[30%] left-[15%] w-16 h-16 opacity-50" delay={2} />
        
        {/* Right Side Shapes */}
        <FloatingShape className="top-[20%] right-[10%] w-32 h-32" delay={1} />
        <FloatingShape className="bottom-[20%] right-[5%] w-20 h-20 opacity-60" delay={3} />
        
        {/* Glow Spheres */}
        <FloatingShape type="sphere" className="top-1/4 left-1/3 w-64 h-64 opacity-30" delay={0} />
        <FloatingShape type="sphere" className="bottom-1/4 right-1/3 w-80 h-80 opacity-20" delay={2} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
              No-Code Automation <br/> Experts
            </h2>
            
            {/* Timeline Visual & Subtext */}
            <div className="relative w-full max-w-4xl mx-auto mb-12">
                {/* Connecting Lines */}
                <div className="flex items-center justify-center w-full">
                   <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-full opacity-50 relative top-3"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative flex justify-center -mt-3">
                    <div className="px-6 bg-[#051a12] relative z-10">
                         <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-gray-500 ring-4 ring-[#051a12]"></div>
                             <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                                Simplifying complex operations with AI-driven automation
                             </p>
                             <div className="w-2 h-2 rounded-full bg-gray-500 ring-4 ring-[#051a12]"></div>
                         </div>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <motion.a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#b6ff85] hover:bg-[#a3e670] text-[#051a12] pl-8 pr-2 py-2 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(182,255,133,0.2)] group"
            >
              <span>Schedule A Free Discovery Session</span>
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                 <ArrowRight size={18} className="text-[#051a12] group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;