
import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_BRANDS } from '../constants';

const TrustedBy = () => {
  return (
    <section className="bg-dark-900 py-12 border-b border-white/5 overflow-hidden">
       <div className="container mx-auto px-6 mb-10 text-center">
         <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
            Trusted by thousands of businesses
         </p>
       </div>
       
       <div className="relative flex overflow-x-hidden group">
         <motion.div 
           initial={{ x: 0 }}
           animate={{ x: "-100%" }}
           transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
           className="flex gap-24 items-center whitespace-nowrap py-4"
         >
            {/* First Set */}
            {TRUSTED_BRANDS.map((logo, index) => (
               <div key={`a-${index}`} className="h-16 md:h-20 w-auto min-w-[140px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <img src={logo} alt="Trusted Business" className="h-full w-full object-contain max-w-[200px]" />
               </div>
            ))}
            {/* Second Set for seamless loop */}
            {TRUSTED_BRANDS.map((logo, index) => (
               <div key={`b-${index}`} className="h-16 md:h-20 w-auto min-w-[140px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <img src={logo} alt="Trusted Business" className="h-full w-full object-contain max-w-[200px]" />
               </div>
            ))}
            {/* Third Set for wider screens safety */}
             {TRUSTED_BRANDS.map((logo, index) => (
               <div key={`c-${index}`} className="h-16 md:h-20 w-auto min-w-[140px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <img src={logo} alt="Trusted Business" className="h-full w-full object-contain max-w-[200px]" />
               </div>
            ))}
         </motion.div>
         
         {/* Fade Edges */}
         <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none z-10" />
         <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none z-10" />
       </div>
    </section>
  );
};

export default TrustedBy;