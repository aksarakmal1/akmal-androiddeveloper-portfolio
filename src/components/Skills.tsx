import React, { useEffect, useRef } from 'react';
import { Smartphone, Code, Server, Database, Layout, Shield, Zap, Settings } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
  level: number;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach((el) => observer.observe(el));

    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills: Skill[] = [
    {
      icon: <Smartphone size={32} />,
      name: "Kotlin Development",
      description: "Expert in Kotlin with practical experience building professional Android applications.",
      level: 95,
    },
    {
      icon: <Layout size={32} />,
      name: "Jetpack Compose",
      description: "Creating modern UIs with Jetpack Compose, including animations and custom components.",
      level: 90,
    },
    {
      icon: <Code size={32} />,
      name: "Android SDK",
      description: "In-depth knowledge of Android SDK, lifecycle management, and platform features.",
      level: 92,
    },
    {
      icon: <Server size={32} />,
      name: "Clean Architecture",
      description: "Implementing scalable, maintainable apps using MVVM, Clean Architecture, and modern patterns.",
      level: 88,
    },
    {
      icon: <Database size={32} />,
      name: "Local Data Storage",
      description: "Expertise in Room, SharedPreferences, DataStore, and SQLite for local persistence.",
      level: 85,
    },
    {
      icon: <Zap size={32} />,
      name: "Coroutines & Flow",
      description: "Building reactive applications using Kotlin Coroutines, Flow, and StateFlow.",
      level: 90,
    },
    {
      icon: <Shield size={32} />,
      name: "Security & Authentication",
      description: "Implementing secure authentication, encryption, and data protection in mobile apps.",
      level: 85,
    },
    {
      icon: <Settings size={32} />,
      name: "CI/CD & Testing",
      description: "Setting up CI/CD pipelines with GitHub Actions and Bitrise, and implementing comprehensive test strategies.",
      level: 80,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4" ref={skillsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With over four years of experience in the technology field—including over one year dedicated to Android development
            I've honed my skills in building robust, user-centric mobile applications using Kotlin and Jetpack Compose. 
            I'm proficient in implementing UI automation testing and CI/CD pipelines to ensure 
            high-quality deliverables and streamlined development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
              
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-teal-400 rounded-full transform origin-left transition-all duration-1000 scale-x-0 group-hover:scale-x-100"
                  style={{ 
                    width: `${skill.level}%`,
                    transform: 'scaleX(0)',
                    transitionDelay: `${(index * 50) + 500}ms`
                  }}
                  ref={(el) => {
                    if (el) {
                      setTimeout(() => {
                        el.style.transform = 'scaleX(1)';
                      }, 100);
                    }
                  }}
                ></div>
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;