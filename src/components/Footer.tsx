import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold">
              <Code size={24} className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
                Akmal<span className="font-extralight">  Mobile Developer Portfolio</span>
              </span>
            </a>
            <p className="text-gray-400 mt-4 max-w-md">
              Passionate Android developer crafting beautiful, high-performance mobile 
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/aksarakmal1" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akmal-hameed-android" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/protifyrecipes" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-purple-400 mt-1 mr-3" />
                <span className="text-gray-400">aksarakmal4@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-purple-400 mt-1 mr-3" />
                <span className="text-gray-400">+1 (###) ###-####</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-purple-400 mt-1 mr-3" />
                <span className="text-gray-400">Toronto, Ontario, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Akmal Hameed. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span>Back to Top</span>
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;