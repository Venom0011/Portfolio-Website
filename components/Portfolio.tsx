
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Email Replier',
      description: 'Built a Chrome extension using Java Spring Boot and Gemini API to automate email replies, improving efficiency and response time by up to 40%.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20email%20interface%20with%20clean%20design%2C%20showing%20automated%20email%20responses%2C%20artificial%20intelligence%20icons%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20software%20interface%2C%20machine%20learning%20visualization&width=600&height=400&seq=ai-email&orientation=landscape',
      tech: ['Java', 'Spring Boot', 'Google Gemini API Key'],
      category: 'ai',
      github: 'https://github.com/Venom0011/AI-Email-Writer',
      demo: null
    },
    {
      id: 2,
      title: 'OLX Clone',
      description: 'Developed a secure full-stack OLX clone with RESTful APIs, improving performance by 60% through caching, pagination, and reduced response time.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20marketplace%20interface%2C%20clean%20product%20listings%2C%20search%20functionality%2C%20user-friendly%20design%2C%20mobile%20responsive%20layout%2C%20orange%20and%20white%20color%20scheme%20similar%20to%20online%20marketplace%20platforms&width=600&height=400&seq=olx-clone&orientation=landscape',
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/Venom0011/OLX-Clone',
      demo: null
    },
    {
      id: 3,
      title: 'PizzaOnClick',
      description: 'Built PizzaOnClick, a dynamic Java Spring Boot web app with real-time order management, reducing checkout time by 40% and improving user experience.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20pizza%20ordering%20app%20interface%2C%20delicious%20pizza%20images%2C%20clean%20food%20delivery%20design%2C%20mobile-friendly%20layout%2C%20red%20and%20white%20color%20scheme%2C%20restaurant%20ordering%20system&width=600&height=400&seq=pizza-app&orientation=landscape',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/Venom0011/PizzaOnClick',
      demo: null
    },
    {
      id: 4,
      title: 'Pune House Price Prediction',
      description: 'A machine learning model to predict house prices in Pune based on various factors like location, size, amenities, and market trends.',
      image: 'https://readdy.ai/api/search-image?query=Real%20estate%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20house%20price%20visualization%2C%20data%20science%20interface%2C%20modern%20property%20analysis%2C%20blue%20and%20green%20color%20scheme%2C%20professional%20real%20estate%20technology&width=600&height=400&seq=house-price&orientation=landscape',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      category: 'ai',
      github: 'https://github.com/Venom0011/House-Price-Predictor',
      demo: 'https://pune-property-price.streamlit.app/'
    },
    {
      id: 5,
      title: 'Olympic Data Analysis',
      description: 'Comprehensive analysis of Olympic Games data with interactive visualizations, athlete performance trends, and country-wise medal statistics.',
      image: 'https://readdy.ai/api/search-image?query=Olympic%20data%20visualization%20dashboard%20with%20interactive%20charts%2C%20sports%20analytics%2C%20medal%20statistics%2C%20colorful%20data%20graphs%2C%20modern%20analytics%20interface%2C%20olympic%20rings%20colors%20theme&width=600&height=400&seq=olympic-data&orientation=landscape',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      category: 'analytics',
      github: 'https://github.com/Venom0011/Olympic_Data_Analysis',
      demo: 'https://olympic-insights.streamlit.app/'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            machine learning, and data analysis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority={project.id === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <i className="ri-github-line mr-1"></i>
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line mr-1"></i>
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
