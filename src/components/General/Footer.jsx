import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-primary text-cream-primary font-nunito">

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-around gap-8">
        <div>
          <img src="/logo/barta.png" alt="BARTA Logo" className="h-16 w-auto mb-4" />
          <h3 className="text-lg font-semibold mb-4 text-cream-primary opacity-80">About Us</h3>
          <p className="max-w-md opacity-80 mt-4">
            Our research lab focuses on developing innovative solutions 
            at the intersection of artificial intelligence, data science, and 
            computational systems to address real-world challenges.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cream-primary opacity-80">Quick Links</h3>
          <div className="grid grid-cols-2 mt-4">
            <a href="#goal" className="opacity-80 hover:opacity-100 transition-opacity duration-200">Research</a>
            <a href="#publications" className="opacity-80 hover:opacity-100 transition-opacity duration-200">Publications</a>
            <a href="#teams" className="opacity-80 hover:opacity-100 transition-opacity duration-200">Our Team</a>
            <a href="#projects" className="opacity-80 hover:opacity-100 transition-opacity duration-200">Projects</a>
            <a href="#events" className="opacity-80 hover:opacity-100 transition-opacity duration-200">Events</a>
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cream-primary opacity-80">Contact</h3>
          <div className="mt-4 opacity-80">
            <p>Institute of Information Technology</p>
            <p>University of Dhaka</p>
            <p>Dhaka, Bangladesh</p>
            <p className="flex items-center gap-2">
              <FaEnvelope size={16} />
              <a href="mailto:barta.research@gmail.com" className="hover:opacity-100 transition-opacity duration-200">barta.research@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-primary/20"></div>
      
      <div className="p-6 bg-green-dark">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-70 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} BARTA Research Lab. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-primary/50 transition-colors duration-200" aria-label="Facebook">
              <FaFacebook size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-primary/50 transition-colors duration-200" aria-label="Twitter">
              <FaTwitter size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/company/bartaresearchlab/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-primary/50 transition-colors duration-200" aria-label="LinkedIn">
              <FaLinkedin size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-primary/50 transition-colors duration-200" aria-label="GitHub">
              <FaGithub size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;