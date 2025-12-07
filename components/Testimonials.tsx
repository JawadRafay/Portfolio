
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const UpworkLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
     <path d="M18.561 0C13.388 0 10.457 3.515 9.444 6.94l-.16.545c-1.332-4.14-4.18-5.83-7.202-5.83C.952 1.655 0 2.585 0 3.96v7.88h3.945V4.73c0-.62.336-1.162.99-1.162.673 0 1.05.57 1.05 1.29v6.983h3.944v-7.96c0-.493.072-.823.158-1.07.674-1.897 1.956-2.583 3.424-2.583 1.637 0 2.533 1.055 2.533 3.016v8.6h3.945V3.125C19.99 1.147 19.344 0 18.56 0z"/>
     <path d="M2.083 14.65h3.945v4.544c0 2.76 1.848 4.793 4.507 4.793 2.625 0 4.54-2.07 4.54-4.792v-4.545h-3.945v4.205c0 .872-.516 1.488-1.284 1.488-.727 0-1.246-.576-1.246-1.487v-4.206H4.656l-2.573.002z"/>
     <path d="M24 14.65h-3.946v-3.79c0-1.893-1.048-2.972-2.658-2.972-1.492 0-2.527.975-3.08 2.51l-.226.63-3.618-1.26.23-.65c.983-2.76 3.193-4.522 6.643-4.522 3.82 0 6.654 2.502 6.654 6.27v3.784z"/>
  </svg>
);

const UpIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center font-bold font-sans tracking-tight ${className}`} style={{ fontFamily: 'sans-serif' }}>
    <span className="italic">up</span>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#0c291a] p-6 rounded-2xl border border-white/5 relative group hover:border-[#14a800]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#14a800]/5 flex flex-col h-full mx-auto w-full max-w-sm">
    {/* Profile Header */}
    <div className="flex items-center gap-4 mb-4">
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#14a800] flex items-center justify-center text-[#081f14] font-bold text-base">
          <UpIcon className="text-base" />
        </div>
        {/* Status Dot */}
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-brand-400 border-2 border-[#0c291a] rounded-full"></div>
      </div>
      <div>
        <h4 className="font-bold text-white leading-tight text-sm">{testimonial.name}</h4>
        <p className="text-[10px] text-brand-400/80 uppercase tracking-wider font-semibold mt-0.5">Verified Client</p>
      </div>
    </div>

    {/* Rating */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="fill-white text-white" />
      ))}
      <span className="text-[10px] text-gray-400 ml-2 font-mono">5.0/5.0</span>
    </div>

    {/* Content */}
    <p className="text-gray-300 leading-relaxed text-sm mb-4 line-clamp-4">
      "{testimonial.content}"
    </p>

    {/* Footer Role */}
    <div className="pt-3 border-t border-white/5 mt-auto">
      <p className="text-[10px] text-gray-500 font-mono">
        {testimonial.role}
      </p>
    </div>
  </div>
);

const TestimonialColumn = ({ 
  testimonials, 
  duration = 20, 
  reverse = false 
}: { 
  testimonials: Testimonial[], 
  duration?: number, 
  reverse?: boolean 
}) => {
  // Duplicate the items to ensure seamless loop
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-6 w-full"
      >
        {displayTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  // Split testimonials into 3 chunks for desktop
  const chunkSize = Math.ceil(TESTIMONIALS.length / 3);
  const col1 = TESTIMONIALS.slice(0, chunkSize);
  const col2 = TESTIMONIALS.slice(chunkSize, chunkSize * 2);
  const col3 = TESTIMONIALS.slice(chunkSize * 2);

  return (
    <section id="testimonials" className="py-24 bg-[#081f14] relative scroll-mt-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#14a800]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-brand-500/10 pb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              What Our Clients <br />
              <span className="text-white">Say About Us</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-gray-300 font-medium mb-3">Trusted by 1000+ <br/> Clients Worldwide</p>
            <a 
              href="https://www.upwork.com/freelancers/~019ad472da22a6897e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[#14a800] hover:text-[#14a800]/80 transition-colors"
            >
              <UpworkLogo className="h-8 w-auto" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Container with Fade Masks */}
        <div className="relative h-[600px] overflow-hidden">
           {/* Top Fade Mask */}
           <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#081f14] to-transparent z-20 pointer-events-none" />
           
           {/* Bottom Fade Mask */}
           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#081f14] to-transparent z-20 pointer-events-none" />

           {/* Mobile: Single Column Scroll / Desktop: 3 Column Scroll */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {/* Column 1 - Up */}
              <TestimonialColumn testimonials={col1} duration={45} />
              
              {/* Column 2 - Down (Hidden on mobile) */}
              <div className="hidden md:block">
                 <TestimonialColumn testimonials={col2} duration={50} reverse={true} />
              </div>

              {/* Column 3 - Up (Hidden on tablet) */}
              <div className="hidden lg:block">
                 <TestimonialColumn testimonials={col3} duration={48} />
              </div>
           </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center relative z-20">
           <a 
              href="https://www.upwork.com/freelancers/~019ad472da22a6897e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors border-b border-brand-400/30 pb-0.5 hover:border-brand-400"
           >
              View all reviews on Upwork
           </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
