

import React from 'react';
import Section from '../../Components/Section';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const About = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { lottieURL, description1, description2 } = about;

  return (
    <div className='p-4'>
      <Section title="About me" />
      <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-10">
        
        {/* Lottie Animation - Always appears first */}
        <div className="h-[50vh] sm:h-[70vh] w-full sm:w-1/2 flex justify-center">
          <DotLottieReact src={lottieURL || ""} loop autoplay />
        </div>

        {/* Descriptions - Row on mobile, Column on larger screens */}
        <div className="flex flex-column sm:flex-col gap-4 sm:gap-6 w-full sm:w-1/2">
          <p className="text-white w-full  sm:w-full">{description1 || ""}</p>
          <p className="text-white w-full sm:w-full">{description2 || ""}</p>
        </div>

      </div>
    </div>
  );
}

export default About;


