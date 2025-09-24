import React, { useState } from 'react';
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';
import { ExternalLink, Github, Eye, Code2 } from 'lucide-react';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px');
  const [setProjectRef, isProjectVisible] = useScrollAnimationMultiple(0.1, '0px 0px -100px 0px');
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});

  const projects = [
    {
      title: 'Food Ordering Website',
      description:
        'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://i.ibb.co/kVZpS016/1.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://foodieexpress24x7.netlify.app/',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://aniverseinfo.netlify.app/',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://example.com',
      category: 'Frontend'
    },
    {
      title: 'Portfolio CMS',
      description:
        'A content management system for creatives to showcase their work with customizable layouts and admin panel.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Sanity', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://example.com',
      category: 'Full Stack'
    },
    {
      title: 'Fitness Tracking App',
      description:
        'Mobile-first fitness application with workout tracking, progress analytics, and social sharing features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://example.com',
      category: 'Mobile'
    },
    {
      title: 'Learning Platform',
      description:
        'An online learning platform with video streaming, progress tracking, and interactive quizzes for students.',
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com/MAHIPAL-SINGH-RAWAT',
      liveUrl: 'https://example.com',
      category: 'Full Stack'
    }
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageLoad = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: true }));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Full Stack': 'from-purple-500 to-pink-500',
      'Frontend': 'from-blue-500 to-cyan-500',
      'Mobile': 'from-green-500 to-emerald-500',
      'Backend': 'from-orange-500 to-red-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-white py-20" ref={ref}>
      <div className="mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'animate-slide-in-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-6 font-bold text-gray-900 text-4xl md:text-6xl leading-tight">
            My
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 text-transparent"> Projects</span>
          </h2>
          <div className={`bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-8 rounded-full w-24 h-1.5 transition-all duration-1000 ${isVisible ? 'animate-pulse-slow' : ''}`}></div>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            A collection of projects that demonstrate my expertise in modern web development,
            showcasing innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="gap-8 grid md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              ref={setProjectRef(index)}
              key={index}
              className={`group project-card rounded-2xl overflow-hidden transition-all hover:-translate-y-3 hover:scale-105 duration-700 transform ${isProjectVisible(index) ? 'animate-bounce-in opacity-100' : 'opacity-0'} stagger-${(index % 6) + 1}`}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                {imageLoading[index] && (
                  <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                    <div className="border-4 border-t-blue-600 border-blue-200 rounded-full w-8 h-8 animate-spin shadow-lg"></div>
                  </div>
                )}
                
                {imageErrors[index] ? (
                  <div className="flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full">
                    <div className="text-center">
                      <Code2 size={32} className="mx-auto mb-2 text-gray-400" />
                      <p className="font-medium text-gray-500 text-sm">{project.title}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 filter group-hover:brightness-110"
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    onLoadStart={() => handleImageLoadStart(index)}
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="top-4 left-4 absolute">
                  <span className={`inline-block bg-gradient-to-r ${getCategoryColor(project.category)} px-3 py-1 rounded-full font-medium text-white text-xs shadow-lg transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="top-4 right-4 absolute flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm rounded-full w-10 h-10 text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-white/50"
                    title="View Live Demo"
                  >
                    <Eye size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm rounded-full w-10 h-10 text-gray-700 hover:text-gray-900 hover:scale-110 transition-all duration-300 border border-white/50"
                    title="View Source Code"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50/50 group-hover:to-emerald-50/50 transition-all duration-500 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200 group-hover:to-emerald-200">
                <h3 className="mb-3 font-bold text-gray-900 group-hover:text-blue-600 text-xl transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mb-6 text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-gray-50 hover:from-blue-50 to-gray-100 hover:to-blue-100 px-3 py-1.5 border border-gray-200 hover:border-blue-200 rounded-lg font-medium text-gray-700 hover:text-blue-700 text-sm transition-all hover:scale-105 duration-300 cursor-default shadow-sm hover:shadow-md backdrop-blur-sm"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 hover:shadow-lg px-4 py-2.5 border-2 border-gray-200 hover:border-gray-900 rounded-lg font-medium text-gray-700 hover:text-gray-900 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Github size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-700 hover:to-blue-800 hover:shadow-xl px-4 py-2.5 rounded-lg font-medium text-white hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <ExternalLink size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <button className={`group relative bg-gradient-to-r from-blue-600 hover:from-blue-700 via-blue-700 hover:via-blue-800 to-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl overflow-hidden font-semibold text-white hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
              <span className="z-10 relative">Explore More Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transition-transform group-hover:translate-x-full duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;