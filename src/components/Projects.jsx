import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Portfolio CMS',
      description:
        'A content management system for creatives to showcase their work with customizable layouts and admin panel.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Sanity', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Fitness Tracking App',
      description:
        'Mobile-first fitness application with workout tracking, progress analytics, and social sharing features.',
      image:
        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Learning Platform',
      description:
        'An online learning platform with video streaming, progress tracking, and interactive quizzes for students.',
      image:
        'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ]

  return (
    <section id='projects' className='bg-white py-20'>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            Featured Projects
          </h2>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1'></div>
          <p className='mx-auto mt-6 max-w-3xl text-gray-600 text-xl'>
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing digital experiences.
          </p>
        </div>

        <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300'></div>
              </div>

              <div className='p-6'>
                <h3 className='mb-3 font-semibold text-gray-900 text-xl'>
                  {project.title}
                </h3>
                <p className='mb-4 text-gray-600 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700 text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex space-x-4'>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    <Github size={20} />
                    <span className='font-medium text-sm'>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors'
                  >
                    <ExternalLink size={20} />
                    <span className='font-medium text-sm'>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg px-8 py-3 rounded-full font-medium text-white hover:scale-105 transition-all duration-300'>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
