// import React, { useState } from 'react'
// import Section from '../../Components/Section'
// import { useSelector } from 'react-redux'

// const Projects = () => {
//   const [selectedItemsIndex, setSelectedItemsindex] = useState(0)
//   const {portfolioData} = useSelector((state)=>state.root)
//   const {projects} = portfolioData;

//   return (

//     <div>
//       <Section title="Projects" />
//       <div className="flex py-10 gap-40">
//         <div className='flex flex-col gap-3 border-l-4 border-gray-900'>
//           {projects.map((project, index) => {
//             return <div onClick={() => setSelectedItemsindex(index)} className=' cursor-pointer'>
//               <h1 className={`text-2xl w-54 p-2 px-5 ${selectedItemsIndex === index ? "text-grey-900 font-bold border-gray-900 border-l-2 bg-gray-600 " : "text-white"}`} >{project.title}</h1>
//             </div>

//           })}

//         </div>
//         <div className='flex items-center justify-center gap-10'>
//           <div>
//             <img className='w-40' src={projects[selectedItemsIndex].image} alt="" />

//           </div>

//           <div className='flex flex-column gap-3'>
//           <h1 className=' w-2/3 text-3xl font-semibold text-red-500'>{projects[selectedItemsIndex].title}</h1>
//             <h1 className='text-white w-2/3'>{projects[selectedItemsIndex].description}</h1>
//             <h1 className='text-white'>{projects[selectedItemsIndex].link}</h1>
//           </div>  

//         </div>
//       </div>
//     </div>
//  )
// }

// export default Projects;



import React, { useState } from 'react'
import Section from '../../Components/Section'
import { useSelector } from 'react-redux'

const Projects = () => {
  const [selectedItemsIndex, setSelectedItemsindex] = useState(0)
  const { portfolioData } = useSelector((state) => state.root)
  const { projects } = portfolioData;

  return (
    <div className="p-4 sm:p-0">
      <Section title="Projects" />
      <div className="flex flex-col lg:flex-row py-10 gap-10 lg:gap-40">
        <div className='flex flex-col gap-3 border-l-4 border-gray-900'>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemsindex(index)}
              className='cursor-pointer'
            >
              <h1 className={`text-2xl w-54 p-2 px-5 ${selectedItemsIndex === index ? "text-gray-900 font-bold border-gray-900 border-l-2 bg-gray-600" : "text-white"}`}>
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
          <div>
            <img className='w-40' src={projects[selectedItemsIndex].image} alt="" />
          </div>
          <div className='flex flex-col gap-3 text-center lg:text-left'>
            <h1 className='w-full lg:w-2/3 text-3xl font-semibold text-red-500'>{projects[selectedItemsIndex].title}</h1>
            <h1 className='text-white w-full lg:w-2/3'>{projects[selectedItemsIndex].description}</h1>
            <h1 className='text-white'>{projects[selectedItemsIndex].link}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;


