import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-gray-900 py-12 text-white'>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className='space-y-6 text-center'>
          <button
            onClick={scrollToTop}
            className='bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold text-transparent text-3xl hover:scale-105 transition-transform duration-300'
          >
            Portfolio
          </button>

          <p className='mx-auto max-w-2xl text-gray-300 text-lg'>
            Building the future, one line of code at a time. Let's create
            something extraordinary together.
          </p>

          <div className='flex justify-center space-x-6'>
            <a
              href='https://github.com/MAHIPAL-SINGH-RAWAT'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:mahipalrwtt269@gmail.com'
              className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300'
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>

          <div className='flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0 pt-8 border-gray-800 border-t'>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Mahipal Singh Rawat. All rights reserved.
            </p>
            <p className='flex items-center space-x-1 text-gray-400 text-sm'>
              <span>Made with</span>
              <Heart className='fill-current w-4 h-4 text-red-500' />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
