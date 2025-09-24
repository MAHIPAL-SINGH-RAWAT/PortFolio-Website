import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px')

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 70 },
        { name: 'JavaScript', level: 80 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'Express', level: 60 }
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Visual Studio', level: 85 },
        { name: 'Vite.js', level: 75 }
      ]
    }
  ]

  return (
    <section
      id='skills'
      className='bg-gradient-to-br from-gray-50 to-blue-50 py-20'
      ref={ref}
    >
      <div className='mx-auto px-6 max-w-6xl'>
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'animate-slide-in-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            Skills & Expertise
          </h2>
          <div className={`bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1 transition-all duration-1000 ${isVisible ? 'animate-pulse-slow' : ''}`}></div>
          <p className='mx-auto mt-6 max-w-3xl text-gray-600 text-xl'>
            I'm always learning and expanding my skill set to stay current with
            the latest technologies and industry trends.
          </p>
        </div>

        <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white shadow-lg hover:shadow-xl p-8 rounded-xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-200 hover:to-emerald-200 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + categoryIndex * 200}ms` }}
            >
              <h3 className='mb-6 font-semibold text-gray-900 text-2xl text-center'>
                {category.title}
              </h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='space-y-2'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium text-gray-700'>
                        {skill.name}
                      </span>
                      <span className='text-gray-500 text-sm'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='bg-gray-200 rounded-full w-full h-2'>
                      <div
                        className={`bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full h-2 transition-all duration-2000 ease-out shadow-sm ${isVisible ? '' : 'w-0'}`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${500 + categoryIndex * 200 + skillIndex * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <div className={`inline-block bg-white shadow-lg p-8 rounded-xl transition-all duration-1000 hover:scale-105 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-200 hover:to-emerald-200 ${isVisible ? 'animate-rotate-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            <h3 className='mb-4 font-semibold text-gray-900 text-2xl'>
              Always Learning
            </h3>
            <p className='mb-6 text-gray-600'>
              Currently exploring: APIs, React Patterns, Node.js
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              {['APIs', 'React Patterns', 'Node.js'].map(tech => (
                <span
                  key={tech}
                  className='bg-gradient-to-r from-blue-600 to-emerald-500 shadow-md hover:shadow-lg px-4 py-2 rounded-full font-medium text-white text-sm hover:scale-105 transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
