
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK, SOCIAL_LINKS } from '../constants';
import { Phone } from 'lucide-react';

const TechStack = () => {
  return (
    <section className="py-24 bg-[#051a12] relative overflow-hidden border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b6ff85]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Desktop Layout - The Arch */}
        <div className="hidden lg:block relative h-[500px]">
           {/* Center Content */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center max-w-2xl z-20">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                 Technology We Use to <br/>
                 Innovate Your Business with <br/>
                 <span className="text-[#b6ff85]">AI & Automation</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
                 FlowVeo has automated operations for dozens of industries by making their workflows more streamlined, leveraging the power of AI-driven solutions.
              </p>
              
              <a 
                href={SOCIAL_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b6ff85] hover:bg-[#a3e670] text-[#051a12] px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
              >
                 Schedule A Free Discovery Session
                 <div className="bg-white rounded-full p-1">
                   <Phone size={14} className="text-[#051a12]" />
                 </div>
              </a>
           </div>

           {/* The Dashed Arch */}
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-dashed border-[#b6ff85]/20 rounded-full pointer-events-none" />

           {/* Floating Icons along the Arch */}
           {TECH_STACK.map((tech, index) => {
              // Mathematical positioning for perfect spacing along the arch
              // Circle center is relative to container: top 480px (80px top offset + 400px radius), left 50%
              const radius = 400; // Matches the 800px width/height of the border div
              const centerY = 480; 
              
              const totalItems = TECH_STACK.length;
              const startAngle = 195; // Degrees
              const endAngle = 345;   // Degrees
              const range = endAngle - startAngle;
              const step = range / (totalItems - 1);
              
              const angleDeg = startAngle + (index * step);
              const angleRad = (angleDeg * Math.PI) / 180;
              
              // Calculate position
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);
              
              const top = centerY + y; // y is negative for upper half
              
              return (
                 <motion.div
                    key={index}
                    className={`absolute rounded-full shadow-2xl flex items-center justify-center ${tech.bg} z-10`}
                    style={{ 
                        top: `${top}px`, 
                        left: `calc(50% + ${x}px)`,
                        width: index === 2 || index === 3 ? '100px' : '80px',
                        height: index === 2 || index === 3 ? '100px' : '80px',
                        transform: 'translate(-50%, -50%)',
                        padding: '16px'
                    }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2 
                    }}
                 >
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                 </motion.div>
              );
           })}
        </div>

        {/* Mobile Layout - Grid */}
        <div className="lg:hidden text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
                 Technology We Use to <br/>
                 <span className="text-[#b6ff85]">Innovate Your Business</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                {TECH_STACK.map((tech, index) => (
                    <div key={index} className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-4 ${tech.bg} shadow-lg`}>
                        <img src={tech.logo} alt={tech.name} className="h-12 w-auto object-contain" />
                        <span className="font-bold text-[#051a12] text-sm">{tech.name}</span>
                    </div>
                ))}
            </div>

            <a 
                href={SOCIAL_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b6ff85] hover:bg-[#a3e670] text-[#051a12] px-6 py-3 rounded-full font-bold w-full justify-center"
              >
                 Schedule A Free Discovery Session
                 <Phone size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
