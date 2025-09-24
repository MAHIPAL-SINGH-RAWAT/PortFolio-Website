import React, { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Frontend Developer',
    'Full-Stack Developer',
    'Web Designer',
    'Photographer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='hero'
      className='relative flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen'
    >
      <div className='mx-auto px-6 py-20 max-w-6xl text-center'>
        <div className='space-y-8 animate-fade-in'>
          <div className='space-y-4'>
            <h1 className='font-bold text-5xl md:text-7xl'>
              <span className='bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 text-transparent'>
                Hello, I'm Mahipal Singh Rawat
              </span>
            </h1>
            <h2 className='font-light text-gray-700 text-2xl md:text-3xl'>
              <span className='inline-block min-w-[300px] text-center'>
                {roles[currentRole]}
              </span>
            </h2>
          </div>

          <p className='mx-auto max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed'>
            I craft beautiful, functional web experiences using modern
            technologies. Passionate about creating seamless user interfaces and
            robust backend systems that solve real-world problems.
          </p>

          <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
            <a href='#projects'>
              <button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg px-8 py-3 rounded-full font-medium text-white hover:scale-105 transition-all duration-300'>
                View My Work
              </button>
            </a>
            <a
              href='/Resume - Mahipal_Singh_Rawat.pdf'
              download='Mahipal_Singh_Rawat_Resume.pdf'
              className='inline-block px-8 py-3 border-2 border-gray-300 hover:border-blue-600 rounded-full font-medium text-gray-700 hover:text-blue-600 transition-all duration-300'
            >
              Download Resume
            </a>
          </div>

          <div className='flex justify-center space-x-6 pt-8'>
            <a
              href='https://github.com/MAHIPAL-SINGH-RAWAT'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white shadow-md hover:shadow-lg p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Github className='w-6 h-6 text-gray-700' />
            </a>
            <a
              href='https://www.linkedin.com/in/mahipal-singh-rawat-052167233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white shadow-md hover:shadow-lg p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Linkedin className='w-6 h-6 text-blue-600' />
            </a>
            <a
              href='mailto:mahipalrwtt269@gmail.com'
              className='bg-white shadow-md hover:shadow-lg p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Mail className='w-6 h-6 text-emerald-600' />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className='bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform'
      >
        <ChevronDown className='w-8 h-8 text-gray-400' />
      </button>
    </section>
  )
}

export default Hero
