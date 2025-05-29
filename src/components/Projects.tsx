import React, { useState, useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveLink?: string;
  caseStudyLink?: string;
  featured: boolean;
  details: {
    challenge: string;
    solution: string;
    results: string;
    technologies: string[];
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Protify Recipes",
    description: "A comprehensive recipe app with delicious, protein-packed healthy meals for every lifestyle.",
    image: "https://res.cloudinary.com/dmzngzssa/image/upload/v1748201595/Protify_Recipes_srqcco.jpg",
    tags: ["Kotlin", "MVVM", "Room", "Dagger Hilt"],
    github: "https://github.com/aksarakmal1",
    liveLink: "https://play.google.com",
    caseStudyLink: "https://github.com/aksarakmal1/Protify-Recipes",
    featured: true,
    details: {
      challenge: "Users needed a comprehensive nutrition and meal-planning solution that seamlessly integrates recipe discovery, dietary tracking, and personalized recommendations in one intuitive app.",
      solution: "Implemented a modular MVVM architecture with clean separation of concerns. Used Room database for local storage, Retrofit for API communication, and Dagger Hilt for dependency injection.",
      results: "Over 500k downloads with a 4.7 star rating. Featured in Google Play's 'Best of Nutrition Apps' category.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Dagger Hilt", "Firebase Analytics", "Cloudinary"]
    }
  },
  {
    id: 2,
    title: "FourSeasons App",
    description: "A premium hotel-booking companion featuring live location–based discovery, interactive maps, seamless calendar booking, and rich media previews.",
    image: "https://res.cloudinary.com/dmzngzssa/image/upload/v1748531875/flyaway_banner_c0xool.jpg",
    tags: ["Kotlin", "Coroutines", "Retrofit", "Biometric Auth"],
    github: "https://github.com/aksarakmal1",
    liveLink: "https://play.google.com",
    caseStudyLink: "https://github.com/aksarakmal1/Fly-Away-FourSeasons",
    featured: true,
    details: {
      challenge: "Designing an intuitive UX for discovering and booking hotels in real time—integrating location services, map visualizations, calendar availability, and offline caching without overwhelming users.",
      solution: "Used Haversine formula with Play Services Location to sort nearby hotels, integrated Maps Compose for interactive exploration, Kizitonwose calendar for sleek date selection, and Room for offline persistence; leveraged Hilt for DI and Coroutines/Flow for responsive data streams.",
      results: "Delivered a polished, end-to-end booking flow that loads 30% faster than comparable apps, supports full offline access to recent searches, and achieved zero crashes in beta testing across 5 device profiles.",
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Retrofit", "Room", "Coil", "Maps Compose", "ExoPlayer"]
    }
  },
  {
  "id": 3,
  "title": "The Home Depot",
  "description": "A feature-rich home improvement companion app providing product browsing, secure authentication, wishlist syncing, store locator, and seamless checkout—all built with modern Android tools.",
  "image": "https://res.cloudinary.com/dmzngzssa/image/upload/v1748442408/The_Home_Depot_mvy0xn.png",
  "tags": ["Kotlin", "Jetpack Compose", "Hilt", "Firebase", "Maps", "Biometric Auth"],
  "github": "https://github.com/aksarakmal1",
  "liveLink": "https://play.google.com",
  "caseStudyLink": "https://github.com/aksarakmal1/The-Home-Depot-App",
  "featured": true,
  "details": {
    "challenge": "Crafting a seamless browsing and purchasing experience for thousands of home-improvement products, while enabling secure login, offline caching of favorites, and real-time store location lookup.",
    "solution": "Integrated Firebase Auth & Firestore for user profiles and wishlist syncing; Coil for high-performance image loading; Maps Compose + Play Services Location for store discovery; Biometric API for one-tap secure login; and Accompanist (SwipeRefresh, Placeholder) for polished UI interactions.",
    "results": "Delivered a polished demo app with sub-200 ms image load times, offline favorite access, and accurate store-distance calculations; showcased strong modular architecture and received positive feedback for UI fluidity in portfolio presentations.",
    "technologies": [
      "Kotlin",
      "Jetpack Compose",
      "Hilt (DI)",
      "Firebase Auth & Firestore",
      "Coil",
      "Maps Compose & Play Services Location",
      "Moshi & Retrofit",
      "Coroutines & Flow",
      "Accompanist (SwipeRefresh, Placeholder)",
      "Biometric Authentication",
      "DataStore Preferences"
    ]
  }
}
,
  {
    "id": 5,
    "title": "FourSeasons UI Automation",
    "description": "End-to-end UI automation suite for the FourSeasons hotel booking Android app, validating search, selection, and booking flows with video recordings for portfolio showcase.",
    "image": "https://res.cloudinary.com/dmzngzssa/image/upload/v1748464064/fourseasons_banner_hvoury.png",
    "tags": ["Appium", "WebdriverIO", "Mocha", "Allure", "Appium Inspector"],
    "github": "https://github.com/aksarakmal1",
    "liveLink": "https://play.google.com",
    "caseStudyLink": "https://github.com/aksarakmal1/FourSeasons---UI-Automation-Testing",
    "featured": false,
    "details": {
      "challenge": "Ensuring reliable, cross-device UI validation for the FourSeasons app’s critical booking flows without exposing proprietary code.",
      "solution": "Leveraged Appium Inspector for robust selector discovery, built WebdriverIO + Mocha scripts with dynamic waits, and integrated Allure reporting with video embeds.",
      "results": "Reduced manual regression testing time by 80% and achieved 99% pass rate across emulator and real-device matrices during beta cycles.",
      "technologies": [
        "Appium (UiAutomator2)",
        "WebdriverIO v8",
        "Mocha",
        "Chai Assertions",
        "Allure Reports",
        "Appium Inspector"
      ]
    }
  },
  {
    "id": 6,
    "title": "Hilton Honors UI Automation",
    "description": "Comprehensive UI automation suite for the Hilton Honors Android app, automating date-picker, search, and room-selection flows with CI-ready reporting and video demos.",
    "image": "https://res.cloudinary.com/dmzngzssa/image/upload/v1748464071/hilton_honors_banner_bjllgw.png",
    "tags": ["Appium", "WebdriverIO", "Mocha", "Allure", "Appium Inspector"],
    "github": "https://github.com/aksarakmal1",
    "liveLink": "https://play.google.com",
    "caseStudyLink": "https://github.com/aksarakmal1/Hilton-Honors--UI-Automation-Testing",
    "featured": false,
    "details": {
      "challenge": "Automating key booking flows (date selection, search, room validation) on the Hilton Honors app while maintaining stability across Android versions.",
      "solution": "Created modular WebdriverIO scripts using accessibility IDs and UIAutomator selectors from Appium Inspector, implemented swipe gestures via pointer actions, and captured video sessions in Allure.",
      "results": "Automated 100% of primary user journeys, enabled nightly regression runs on Bitrise, and surfaced actionable reports with embedded video for faster QA feedback.",
      "technologies": [
        "Appium (UiAutomator2)",
        "WebdriverIO v8",
        "Mocha",
        "Chai Assertions",
        "Allure Reports",
        "Appium Inspector"
      ]
    }
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 flex space-x-3 mb-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {project.caseStudyLink && (
        <a
          href={project.caseStudyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          View the Repository
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projectsData : projectsData.filter((p) => p.featured)),
    [filter]
  );

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent Android development projects, including UI automation testing implementations, that showcase my expertise in creating beautiful, functional, and user-friendly mobile applications.
          </p>
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'featured'
                    ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setFilter('featured')}
              >
                Featured
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
