import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px')
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-gray-900 py-12 text-white' ref={ref}>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className={`space-y-6 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={scrollToTop}
            className={`bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold text-transparent text-3xl hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-bounce-in' : ''}`}
            style={{ animationDelay: '200ms' }}
          >
            Portfolio
          </button>

          <p className={`mx-auto max-w-2xl text-gray-300 text-lg transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            Building the future, one line of code at a time. Let's create
            something extraordinary together.
          </p>

          <div className={`flex justify-center space-x-6 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <a
              href='https://github.com/MAHIPAL-SINGH-RAWAT'
              target='_blank'
              rel='noopener noreferrer'
<<<<<<< HEAD
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
=======
              className='bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl p-3 rounded-full hover:scale-110 transition-all duration-300'
>>>>>>> 9c7615f (Improve Code)
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://www.linkedin.com/in/mahipal-singh-rawat-052167233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
<<<<<<< HEAD
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
=======
              className='bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl p-3 rounded-full hover:scale-110 transition-all duration-300'
>>>>>>> 9c7615f (Improve Code)
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:mahipalrwtt269@gmail.com'
<<<<<<< HEAD
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl'
=======
              className='bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl p-3 rounded-full hover:scale-110 transition-all duration-300'
>>>>>>> 9c7615f (Improve Code)
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>

          <div className={`flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0 pt-8 border-gray-800 border-t transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
<<<<<<< HEAD
            <p className='text-gray-400 text-sm transition-all duration-300 hover:text-gray-300'>
              © {currentYear} Mahipal Singh Rawat. All rights reserved.
            </p>
            <p className='flex items-center space-x-1 text-gray-400 text-sm transition-all duration-300 hover:text-gray-300'>
=======
            <p className='text-gray-400 hover:text-gray-300 text-sm transition-all duration-300'>
              © {currentYear} Mahipal Singh Rawat. All rights reserved.
            </p>
            <p className='flex items-center space-x-1 text-gray-400 hover:text-gray-300 text-sm transition-all duration-300'>
>>>>>>> 9c7615f (Improve Code)
              <span>Made with</span>
              <Heart className='fill-current w-4 h-4 text-red-500 animate-pulse' />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
