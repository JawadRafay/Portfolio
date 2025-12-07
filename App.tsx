
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech', href: '#tech-stack' }, // Added Tech ID
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-500 selection:text-white font-sans">
      {/* Floating Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-6xl bg-[#051a12]/90 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 flex justify-between items-center shadow-2xl shadow-black/20">
          
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#root')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#b6ff85] to-[#14a800] rounded-full flex items-center justify-center text-[#051a12] font-black text-lg group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Rafay</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#b6ff85] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
             {/* CTA Button */}
            <a 
              href="https://calendly.com/muhammadrafayjawad/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#b6ff85] hover:bg-[#a3e670] text-[#051a12] rounded-full text-sm font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(182,255,133,0.3)] hidden sm:block"
            >
              Schedule a Call
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-32 px-6 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-10 duration-200">
           {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold text-gray-300 hover:text-[#b6ff85]"
            >
              {link.name}
            </a>
          ))}
          <a 
              href="https://calendly.com/muhammadrafayjawad/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-4 bg-[#b6ff85] text-[#051a12] rounded-xl text-center font-bold text-lg"
            >
              Schedule a Call
          </a>
        </div>
      )}

      <main className="relative z-0">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Projects />
        <div id="tech-stack">
          <TechStack />
        </div>
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
