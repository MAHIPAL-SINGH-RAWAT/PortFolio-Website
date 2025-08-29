import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 88 }
      ]
    }
  ]

  return (
    <section
      id='skills'
      className='bg-gradient-to-br from-gray-50 to-blue-50 py-20'
    >
      <div className='mx-auto px-6 max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 font-bold text-gray-900 text-4xl md:text-5xl'>
            Skills & Expertise
          </h2>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full w-24 h-1'></div>
          <p className='mx-auto mt-6 max-w-3xl text-gray-600 text-xl'>
            I'm always learning and expanding my skill set to stay current with
            the latest technologies and industry trends.
          </p>
        </div>

        <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-white shadow-lg hover:shadow-xl p-8 rounded-xl transition-shadow duration-300'
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
                        className='bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full h-2 transition-all duration-1000 ease-out'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-block bg-white shadow-lg p-8 rounded-xl'>
            <h3 className='mb-4 font-semibold text-gray-900 text-2xl'>
              Always Learning
            </h3>
            <p className='mb-6 text-gray-600'>
              Currently exploring: AI/ML, Web3, and Advanced React Patterns
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              {['TensorFlow', 'Solidity', 'Three.js', 'GraphQL'].map(tech => (
                <span
                  key={tech}
                  className='bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 rounded-full font-medium text-white text-sm'
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
