import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

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
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            About Me
          </h2>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1'></div>
        </div>

        <div className='items-center gap-16 grid lg:grid-cols-2'>
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-900 text-2xl'>
                Passionate Frontend Developer
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed'>
                I'm a frontend developer passionate about creating beautiful, responsive, and user-friendly web interfaces. 
                I specialize in modern JavaScript frameworks and have a keen eye for design and user experience. 
                My journey began with HTML and CSS, and has evolved into mastering React and modern frontend technologies.
              </p>
              <p className='text-gray-600 text-lg leading-relaxed'>
                I love turning complex problems into simple, beautiful designs. When I'm not coding, 
                you'll find me exploring new frontend frameworks, practicing photography, or learning 
                about the latest web development trends and best practices.
              </p>
            </div>

            <div className='gap-8 grid grid-cols-2 pt-6'>
              <div>
                <h4 className='font-bold text-blue-600 text-3xl'>25+</h4>
                <p className='text-gray-600'>Projects Completed</p>
              </div>
              <div>
                <h4 className='font-bold text-emerald-600 text-3xl'>2+</h4>
                <p className='text-gray-600'>Years Experience</p>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-scale-in' : ''}`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div className='bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-lg'>
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
