import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Bell, Calendar, Pill as Pills, LineChart as ChartLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediRemind: React.FC = () => {
  const screenshots = [
    {
      url: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medication Tracking"
    },
    {
      url: "https://images.pexels.com/photos/4021780/pexels-photo-4021780.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Appointment Scheduling"
    },
    {
      url: "https://images.pexels.com/photos/4021781/pexels-photo-4021781.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Health Metrics"
    },
    {
      url: "https://images.pexels.com/photos/4021778/pexels-photo-4021778.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Family Sharing"
    }
  ];

  const features = [
    {
      icon: <Bell className="w-6 h-6 text-primary-600" />,
      title: "Smart Reminders",
      description: "Intelligent medication reminders that adapt to your schedule"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary-600" />,
      title: "Appointment Management",
      description: "Easy scheduling and tracking of medical appointments"
    },
    {
      icon: <Pills className="w-6 h-6 text-primary-600" />,
      title: "Medication Tracking",
      description: "Comprehensive medication management with refill alerts"
    },
    {
      icon: <ChartLine className="w-6 h-6 text-primary-600" />,
      title: "Health Analytics",
      description: "Track health metrics and generate detailed reports"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                  Healthcare Solution
                </span>
              </motion.div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                MediRemind Health App
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                A comprehensive medication reminder and health tracking application designed to help users maintain their medication schedules and manage their healthcare journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://play.google.com/store" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View on Play Store
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-600 dark:hover:border-primary-500 transition-colors"
                >
                  <Github size={20} className="mr-2" />
                  View Source
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[280px] h-[560px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="MediRemind App Main Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white text-center mb-12">
            App Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative w-[220px] h-[440px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-700 rounded-[2rem] p-2 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gray-900 rounded-[1.8rem] overflow-hidden">
                      <img 
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-center text-lg font-medium text-gray-900 dark:text-white mt-6">
                  {screenshot.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">
                Technical Overview
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  MediRemind is built using modern Android development practices and the latest technologies to ensure reliable medication tracking and health management.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Architecture & Technologies
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Architecture:</strong> MVVM with Clean Architecture for maintainable and testable code
                  </li>
                  <li>
                    <strong>UI Framework:</strong> Jetpack Compose with Material You design system
                  </li>
                  <li>
                    <strong>Background Processing:</strong> WorkManager for reliable medication reminders
                  </li>
                  <li>
                    <strong>Local Storage:</strong> Room database with DataStore for preferences
                  </li>
                  <li>
                    <strong>APIs:</strong> Integration with Calendar Provider and HealthConnect API
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Client
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      MediRemind Health Solutions
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Timeline
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      4 months
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Role
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      Senior Android Developer
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Platform
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      Android (API 26+)
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Kotlin',
                      'Jetpack Compose',
                      'Room',
                      'WorkManager',
                      'DataStore',
                      'Calendar Provider',
                      'HealthConnect API',
                      'Coroutines',
                      'Flow',
                      'Material You'
                    ].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediRemind;