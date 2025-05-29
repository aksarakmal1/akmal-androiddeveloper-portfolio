import React, { useEffect, useState } from 'react';
import { ArrowDownCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';


const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleScrollDown = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-teal-200 dark:bg-teal-900/20 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Hero Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400 mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-800 to-teal-600 dark:from-white dark:via-purple-300 dark:to-teal-300 bg-clip-text text-transparent">
              Akmal Hameed
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Android Developer
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
              As a Kotlin and Jetpack Compose engineer, I've built and contributed to multiple Android applications with secure authentication via AWS Cognito (99.9% uptime). 
              I've optimized API performance to reduce latency by up to 30% and implemented UI automation pipelines that cut manual testing efforts by 50%. 
              I'm passionate about clean architecture (MVVM), scalable CI/CD practices, and delivering intuitive, high-quality mobile experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 rounded-full font-medium transition-all"
              >
                View My Work
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-8">
              <a href="https://github.com/aksarakmal1" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
                <SiGithub size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/akmal-hameed-android" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
                <SiLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/protifyrecipes" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform hover:scale-105 duration-500">
              <img 
                src="https://res.cloudinary.com/dmzngzssa/image/upload/v1748289389/Mohammed_Akmal_Photo_ilv5lo.jpg" 
                alt="Akmal Hameed" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-600 dark:text-purple-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default Hero;