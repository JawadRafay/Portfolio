
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Blocks, Workflow, BrainCircuit, BarChart3, FileText, LayoutTemplate } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Blocks,
  Workflow,
  BrainCircuit,
  BarChart3,
  FileText,
  LayoutTemplate
};

const ServiceCard = ({ service, Icon }: { service: any, Icon: any }) => (
  <div className="h-full bg-[#0c261a] p-8 rounded-[2rem] border border-brand-500/10 hover:border-brand-500/30 transition-all duration-300 group hover:-translate-y-2 flex flex-col shadow-2xl shadow-black/20">
    <div className="w-12 h-12 mb-6 text-[#b6ff85]">
      <Icon size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm flex-grow">
      {service.description}
    </p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 scroll-mt-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock New Possibilities with <br/>
            <span className="text-brand-400">AI Automation Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            FlowVeo offers a complete range of AI-automation services to optimize your challenging workflows while saving you time and money.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                 <ServiceCard service={service} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Vertical Sticky Stack */}
        <div className="md:hidden flex flex-col relative pb-20 px-4">
            {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon];
                // Offset calculation for stacking - tighter stack
                const topOffset = 120 + (index * 15); 
                
                return (
                    <div 
                        key={index} 
                        className="sticky"
                        style={{ 
                            top: `${topOffset}px`, 
                            zIndex: index + 10,
                        }} 
                    >
                         <div className="bg-[#0c261a] p-8 rounded-[2rem] border border-brand-500/10 shadow-[0_-5px_25px_rgba(0,0,0,0.5)] mb-6 flex flex-col min-h-[320px] transform transition-transform duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 text-[#b6ff85] bg-brand-500/10 rounded-2xl flex items-center justify-center">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <span className="text-4xl font-black text-brand-900/30 select-none">0{index + 1}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {service.description}
                            </p>
                          </div>
                    </div>
                )
            })}
        </div>

      </div>
    </section>
  );
};

export default Services;
