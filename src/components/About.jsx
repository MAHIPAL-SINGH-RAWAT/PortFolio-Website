import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px')

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description:
        'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Building fast, optimized applications that deliver results across all devices.'
    }
  ]

  return (
    <section id='about' className='bg-white py-20' ref={ref}>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'animate-slide-in-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            About Me
          </h2>
          <div className={`bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1 transition-all duration-1000 ${isVisible ? 'animate-pulse-slow' : ''}`}></div>
        </div>

        <div className='items-center gap-16 grid lg:grid-cols-2'>
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-900 text-2xl'>
                Passionate Frontend Developer
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed'>
                I'm a passionate frontend developer who loves creating beautiful, responsive, and user-friendly web interfaces. 
                I specialize in React, JavaScript, and modern CSS frameworks like Tailwind CSS. My journey in web development 
                started with HTML and CSS, and has evolved into mastering modern frontend technologies and best practices.
              </p>
              <p className='text-gray-600 text-lg leading-relaxed'>
                I enjoy turning complex problems into simple, elegant solutions. When I'm not coding, 
                you'll find me exploring new frontend frameworks, practicing photography, or staying up-to-date 
                with the latest web development trends and technologies.
              </p>
            </div>

            <div className='gap-8 grid grid-cols-2 pt-6'>
              <div>
                <h4 className='font-bold text-blue-600 text-3xl'>15+</h4>
                <p className='text-gray-600'>Projects Completed</p>
              </div>
              <div>
                <h4 className='font-bold text-emerald-600 text-3xl'>2+</h4>
                <p className='text-gray-600'>Years Frontend Experience</p>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-blue-200 hover:to-emerald-200 ${isVisible ? 'animate-bounce-in' : ''}`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div className='bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-lg shadow-lg'>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='mb-2 font-semibold text-gray-900 text-xl'>
                      {highlight.title}
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
