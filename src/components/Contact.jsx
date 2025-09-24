import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'mahipalrwtt269@gmail.com',
      link: 'mailto:mahipalrwtt269@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Almora, Uttarakhand',
      link: null
    }
  ]

  return (
    <section
      id='contact'
      className='bg-gradient-to-br from-gray-50 to-blue-50 py-20'
      ref={ref}
    >
      <div className='mx-auto px-6 max-w-6xl'>
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            Get In Touch
          </h2>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1'></div>
          <p className='mx-auto mt-6 max-w-3xl text-gray-600 text-xl'>
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className='gap-12 grid lg:grid-cols-2'>
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className='mb-6 font-semibold text-gray-900 text-2xl'>
                Let's Connect
              </h3>
              <p className='mb-8 text-gray-600 text-lg leading-relaxed'>
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div className='flex items-center space-x-4 bg-white shadow-sm hover:shadow-md p-4 rounded-lg transition-shadow duration-300'>
                    <div className='bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-lg'>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        {info.title}
                      </h4>
                      <p className='text-gray-600'>{info.detail}</p>
                    </div>
                  </div>
                )

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className={`block hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${600 + index * 150}ms` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className={`hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${600 + index * 150}ms` }}
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <div className={`bg-white shadow-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
              <h4 className='mb-3 font-semibold text-gray-900'>
                Quick Response
              </h4>
              <p className='text-gray-600'>
                I typically respond to emails within 24 hours. For urgent
                matters, feel free to call or connect with me on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white shadow-lg p-8 rounded-xl transition-all duration-1000 delay-500 hover:shadow-xl ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-10'}`}>
            <h3 className='mb-6 font-semibold text-gray-900 text-2xl'>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='gap-6 grid md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 font-medium text-gray-700 text-sm'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 font-medium text-gray-700 text-sm'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 font-medium text-gray-700 text-sm'
                >
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className='px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300'
                  placeholder='Project inquiry, collaboration, etc.'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block mb-2 font-medium text-gray-700 text-sm'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className='px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 resize-none'
                  placeholder='Tell me about your project or how I can help...'
                />
              </div>

              <button
                type='submit'
                className='flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl px-6 py-3 rounded-lg w-full font-medium text-white hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-800'
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
