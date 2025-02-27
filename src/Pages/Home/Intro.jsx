import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  console.log(intro, "Intro");

  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <section id="home" className="bg-zinc-700">
      <div className="min-h-screen flex flex-col items-center md:items-start justify-center gap-6 p-6 md:p-10 lg:p-20">
        <h1 className="text-white text-lg md:text-xl">{welcomeText || ""}</h1>
        <h1 className="text-orange-300 text-4xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left">
          {firstName + " " + lastName}
        </h1>
        <h1 className="text-3xl md:text-5xl text-white font-semibold text-center md:text-left">
          {caption || ""}
        </h1>
        <p className="text-white text-center md:text-left w-full md:w-2/3 leading-relaxed">
          {description || ""}
        </p>
        <button className="border-2 border-gray-900 bg-white text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Intro;






