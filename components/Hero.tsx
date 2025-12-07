import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Cpu, Briefcase } from 'lucide-react';
import { SOCIAL_LINKS, RESUME_CONTENT } from '../constants';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a Blob from the HTML content
    const blob = new Blob([RESUME_CONTENT], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Rafay_Resume.html'; // Browser treats as HTML, prints as PDF
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Background Gradients - Z-Index -10 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-800/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/40 border border-brand-500/30 text-brand-300 mb-6 backdrop-blur-sm">
            <Cpu size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Business Partner at FlowVeo</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-6 leading-tight">
            Automate Everything. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">
              Scale Without Limits.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-xl leading-relaxed">
            I'm <strong>Muhammad Rafay</strong>, an Elite No-Code Automation Expert saving businesses 40+ hours/week. I build AI-powered agents, n8n workflows, and GHL systems that work while you sleep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-30">
            <a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 cursor-pointer"
            >
              <Calendar size={20} />
              Book Discovery Call
            </a>
            
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white border border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:border-gray-500 cursor-pointer"
            >
              <Download size={20} />
              Download CV
            </button>

            <a 
              href={SOCIAL_LINKS.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#14a800] hover:bg-[#14a800]/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#14a800]/20 cursor-pointer"
            >
              <Briefcase size={20} />
              Upwork Profile
            </a>
          </div>

          <div className="mt-20 py-8 border-t border-gray-800/50 flex flex-wrap items-center gap-y-6 gap-x-12 text-gray-400 text-sm font-mono relative z-20">
            <div className="flex items-center gap-3 text-brand-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              <span className="font-semibold tracking-wide">Available for projects</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-700 rounded-full" />
            <div className="font-medium">500+ Automations Built</div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-700 rounded-full" />
            <div className="font-medium">4+ Years Experience</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block z-20"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Decorative circles */}
            <div className="absolute inset-0 border border-brand-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-8 border border-brand-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Container with Glow */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-dark-800 shadow-2xl shadow-brand-500/20 z-10">
               <img 
                 src="https://res.cloudinary.com/dezvkcccw/image/upload/e_upscale/Gemini_Generated_Image_9tceop9tceop9tce_tkoevh.jpg" 
                 alt="Muhammad Rafay" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 glass-card p-4 rounded-xl flex items-center gap-3 bg-dark-900/90 backdrop-blur-xl z-30"
            >
              <div className="p-2 bg-brand-500/20 rounded-lg text-brand-400">
                <Cpu size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-400">Certified</div>
                <div className="font-bold text-white">Zapier Expert</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 -right-4 glass-card p-4 rounded-xl flex items-center gap-3 bg-dark-900/90 backdrop-blur-xl z-30"
            >
               <div className="text-3xl font-bold text-brand-400">40+</div>
               <div className="text-xs text-gray-300 leading-tight">Hours Saved<br/>Weekly</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;