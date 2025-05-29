import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            <Code size={28} className="text-purple-600 dark:text-purple-400" />
            <span className="bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
              Akmal<span className="font-extralight">  Mobile Developer Portfolio</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks scrollToSection={scrollToSection} />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? 
                <Sun className="text-yellow-400" size={20} /> : 
                <Moon className="text-gray-700" size={20} />
              }
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? 
                <Sun className="text-yellow-400" size={20} /> : 
                <Moon className="text-gray-700" size={20} />
              }
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              {isMenuOpen ? 
                <X className="text-gray-700 dark:text-white" size={24} /> : 
                <Menu className="text-gray-700 dark:text-white" size={24} />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks scrollToSection={scrollToSection} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    //{ id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </>
  );
};

export default Header;