// import React from 'react'
// import Section from '../../Components/Section'
// import { useSelector } from 'react-redux';

// const Skills = () => {
//   const {loading, portfolioData} = useSelector((state)=>state.root)
//   console.log(portfolioData, "Portfolio Data");
//   const skills = portfolioData.skills[0].skills;
//   console.log(skills, "Skills Here")

//   return (
   
//      <div className='flex flex-column'>
//       <Section title="Skills"/>
//       <h1 className='text-gray-900 text-2xl font-semibold mb-20 mt-10'>Here are few technologies i've working with recently :</h1>
//      <div className='d-flex flex-wrap gap-8 items-center justify-center mb-30' >
      
//      {skills.map((skill,index)=>{
//         return <h1 className='flex items-center w-[15%] h-[2vh] p-8 border-gray-900 border-2 rounded-lg text-gray-900 font-semibold gap-10'>{skill}</h1>
//       })}
      
//      </div>
//     </div>
   
//   )
// }

// export default Skills



import React from 'react';
import Section from '../../Components/Section';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData, "Portfolio Data");

  const skills = portfolioData.skills[0].skills;
  console.log(skills, "Skills Here");

  return (
    <div className="flex flex-col p-4">
      <Section title="Skills" />
      <h1 className="text-gray-900 text-2xl font-semibold mb-10 mt-6 text-center">
        Here are a few technologies I've been working with recently:
      </h1>

      {/* Skills Container */}
      <div className="flex flex-wrap sm:flex-row gap-4 sm:gap-8 items-center justify-center mb-10 sm:mb-20">
        {skills.map((skill, index) => (
          <h1 
            key={index} 
            className="flex items-center  justify-center w-1/2 sm:w-[15%] h-auto sm:h-[2vh] p-4 sm:p-8 border-gray-900 border-2 rounded-lg text-gray-900 font-bold text-center"
          >
            {skill}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;

