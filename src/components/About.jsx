import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
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
    <section id='about' className='bg-white py-20'>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            About Me
          </h2>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1'></div>
        </div>

        <div className='items-center gap-16 grid lg:grid-cols-2'>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-900 text-2xl'>
                Passionate Developer with Hand-On Experience
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed'>
                I'm a full-stack developer, specializing in creating digital experiences that combine beautiful design
                with powerful functionality. My journey in web development
                started with a curiosity about how things work on the internet,
                and has evolved into a passion for crafting solutions that make
                a difference.
              </p>
              <p className='text-gray-600 text-lg leading-relaxed'>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers. I believe in continuous learning and staying current
                with the latest industry trends and best practices.
              </p>
            </div>

            <div className='gap-8 grid grid-cols-2 pt-6'>
              <div>
                <h4 className='font-bold text-blue-600 text-3xl'>50+</h4>
                <p className='text-gray-600'>Projects Completed</p>
              </div>
              <div>
                <h4 className='font-bold text-emerald-600 text-3xl'>Nil</h4>
                <p className='text-gray-600'>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className='flex items-start space-x-4 bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors duration-300'
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
