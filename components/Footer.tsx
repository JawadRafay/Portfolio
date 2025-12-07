import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#051a12] pb-12 px-4 md:px-6">
       <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Left Box - Links */}
             <div className="bg-[#0c261a] rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <span className="text-8xl">🔗</span>
                </div>
                
                <div className="flex items-center gap-2 mb-8 text-white font-medium relative z-10">
                   <span className="text-xl">🔗</span>
                   Explore Before You Go
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm relative z-10">
                   <div className="flex flex-col gap-4">
                      <span className="text-white font-bold mb-2">Main</span>
                      <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">About Me</a>
                      <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">Skills & Tech</a>
                      <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">Projects</a>
                   </div>
                   <div className="flex flex-col gap-4">
                      <span className="text-white font-bold mb-2">Social Proof</span>
                      <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">Client Reviews</a>
                      <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">Experience</a>
                   </div>
                   <div className="flex flex-col gap-4">
                      <span className="text-white font-bold mb-2">Action</span>
                      <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-400 hover:text-[#b6ff85] transition-colors">Contact Me</a>
                      <a href={SOCIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#b6ff85] transition-colors inline-flex items-center gap-1">
                        Book Call <ArrowUpRight size={12} />
                      </a>
                   </div>
                </div>
             </div>

             {/* Right Box - Newsletter */}
             <div className="bg-[#0c261a] rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#b6ff85]/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h3 className="text-white font-bold text-xl mb-2 relative z-10">Join Our Newsletter</h3>
                <p className="text-gray-400 text-sm mb-8 relative z-10">Get the latest automation insights & exclusive deals.</p>
                
                <div className="relative z-10">
                   <input 
                      type="email" 
                      placeholder="Enter Your Email" 
                      className="w-full bg-white rounded-full py-4 pl-6 pr-36 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b6ff85] transition-shadow placeholder:text-gray-400"
                   />
                   <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#b6ff85] text-[#051a12] font-bold px-6 rounded-full hover:bg-[#a3e670] transition-colors">
                      Subscribe
                   </button>
                </div>
             </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Copyright */}
             <div className="md:col-span-1 bg-[#0c261a] rounded-[2rem] p-8 border border-white/5 flex items-center justify-center md:justify-start">
                <span className="text-gray-400 text-xs font-mono">
                   Flowveo AI © {new Date().getFullYear()} — Automate better, scale smarter.
                </span>
             </div>

             {/* LinkedIn */}
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#0c261a] rounded-[2rem] p-6 border border-white/5 flex items-center justify-center hover:bg-[#143d2b] hover:border-[#b6ff85]/30 transition-all group">
                <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform" />
             </a>
             
             {/* Upwork */}
             <a href={SOCIAL_LINKS.upwork} target="_blank" rel="noopener noreferrer" className="bg-[#0c261a] rounded-[2rem] p-6 border border-white/5 flex items-center justify-center hover:bg-[#143d2b] hover:border-[#b6ff85]/30 transition-all group">
                 <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWQYZ4W0cjzrBXm9YYRftRjselRRLWJ2d7Q&s" 
                    alt="Upwork"
                    className="h-10 w-auto rounded-lg group-hover:scale-105 transition-transform" 
                 />
             </a>
          </div>
       </div>
    </footer>
  );
};

export default Footer;