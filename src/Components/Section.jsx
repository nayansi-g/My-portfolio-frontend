import React from 'react'

const Section = ({title}) => {
  return (
    <div className='flex items-center gap-10 py-10 '>
      <h1 className='text-white text-3xl'>{title}</h1>
      <div className="bg-gray-900 w-60 h-[2px]"></div>
    </div>
  )
}

export default Section;
