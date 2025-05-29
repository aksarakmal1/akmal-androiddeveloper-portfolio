import React, { useRef, useEffect } from 'react';
import { Award, Clock, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    {
      icon: <Briefcase size={24} className="text-purple-600 dark:text-purple-400" />,
      value: "1+",
      label: "Years Experience",
    },
    {
      icon: <Award size={24} className="text-purple-600 dark:text-purple-400" />,
      value: "25+",
      label: "Android Projects Built",
    },
    {
      icon: <Clock size={24} className="text-purple-600 dark:text-purple-400" />,
      value: "99.9%",
      label: "App Uptime (AWS Cognito)",
    },
  ];

  const timelineEvents = [
    {
    year: "2024 - Present",
    title: "Android Developer",
    company: "Freelance",
    description: [
      "Developed a hotel booking app with Kotlin & Jetpack Compose, integrating AWS Cognito for secure login and AWS DynamoDB for real-time data sync.",
      "Implemented Google Maps Compose & Geolocation APIs to display nearby hotels, travel routes, and ETA.",
      "Integrated OAuth (Google, Facebook, Apple) and JWT session management for secure access control.",
      "Automated UI test suites with Appium & WebdriverIO; integrated CI/CD via GitHub Actions and Bitrise.",
      "Crafted responsive UIs using Material Design 3, Accompanist Pager, and smooth Compose animations.",
      ],
    },
    {
    year: "2021 - 2022",
    title: "BIM Technical Support Specialist",
    company: "Ram tech Software Solution",
    description: [
      "Coordinated production of BIM models and detailed drawing sets, ensuring alignment with project requirements and building codes.",
      "Streamlined task management using Jira and other PM tools, improving project delivery timelines by 15%.",
      "Ensured high-quality documentation by enforcing CAD standards and conducting systematic reviews.",
      ],
    },
    {
    year: "2020 - 2021",
    title: "BIM TECHNOLOGIST",
    company: "SKI Engineering system",
    description: [
      "Created detailed shop drawings for prefab modules, ensuring coordination with MEP for sleeves and ducts.",
      "Established BIM work-sharing processes, enabling concurrent collaboration across multidisciplinary teams.",
      "Generated BIM content for building components using the Revit family editor as necessary, contributing to comprehensive project modelling.",
      ],
    },
    {
    year: "2019 - 2020",
    title: "INTERIOR DESIGNER",
    company: "Srinsoft Technologies",
    description: [
      "Wrote scripts in Dynamo and Python to automate production, significantly increasing efficiency for repetitive elements. Delivered LOD 500-level production drawing.",
      "Actively participated as a productive team member in developing highly detailed models in REVIT.",
      "Reviewed drawings for quality control and set up drawings in an organized and appropriately labelled fashion.",
      ],
    },
    {
    year: "2023 - 2024",
    title: "Project management and design",
    company: "Fanshawe College - Canada",
    description: [
      "Postgraduation degree in Project management and design.",
      ],
    },
    {
    year: "2015 - 2019",
    title: "Bachelor's of Civil Engineering",
    company: "Anna University",
    description: [
      "I completed my bachelor's degree in Civil Engineering.",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={aboutRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know my professional journey and what drives my passion for creating exceptional Android applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column: Bio */}
            <div className="animate-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p>
                  I'm a passionate Android developer with 1+ year of hands-on experience building modern, 
                  scalable mobile apps using Kotlin and Jetpack Compose. After a successful start in civil 
                  engineering and BIM technology, I discovered my true calling in Android development and 
                  have been dedicated to mastering it ever since.
                </p>
                <p>
                   I've built real-world applications from the ground up—like a hotel-booking app with AWS Cognito 
                   authentication, Google Maps integration, and smooth, user-friendly interfaces powered by 
                   Jetpack Compose and Material Design 3. I specialize in modern Android architecture patterns 
                   (MVVM, DI with Koin/Dagger), REST API integration, and automating CI/CD pipelines 
                   with GitHub Actions and Bitrise.
                </p>
                <p>
                  What drives me is creating intuitive, high-performance apps that solve real problems. 
                  I focus on user-centered design, clean architecture, and continuous improvement. 
                  With my background in project planning and collaborative development, I bring a strong blend of 
                  technical and organizational skills to every project.
                </p>
                <p>
                  I'm currently open to full-time Android developer roles—especially remote or Canada-based opportunities—
                  where I can continue to grow, build impactful apps, and contribute to an innovative team. 
                  Let's connect!
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="mb-3">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column: Timeline */}
            <div className="animate-element opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience & Education</h3>
              
              <div className="relative border-l-2 border-purple-200 dark:border-purple-900 pl-8 ml-6 space-y-10">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    <span className="absolute -left-[41px] flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 dark:border-purple-700">
                      {index <= 3 ? (
                        <Briefcase size={18} className="text-purple-600 dark:text-purple-400" />
                      ) : (
                        <GraduationCap size={18} className="text-purple-600 dark:text-purple-400" />
                      )}
                    </span>
                    <div className="mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">{event.year}</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h4>
                    <p className="text-base font-medium text-purple-600 dark:text-purple-400 mb-2">{event.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;