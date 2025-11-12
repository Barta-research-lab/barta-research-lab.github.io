import React from 'react';

const OurResearch = () => {
  return (
    <div className="bg-green-primary py-12 px-3 2xl:py-16">
      <div className="container mx-auto max-w-5xl 2xl:max-w-7xl">
        <h2 className="text-3xl text-center text-cream-primary font-nunito font-bold mb-8 lg:mb-16">Our Research Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Community Smell in Software Projects",
            "Software Development Team Formation",
            "Software Auto-Repairing",
            "Sentiment Analysis in Software Engineering",
            "Relationship between Change Couple",
            "Code Clone Lifetime Analysis"
          ].map((item, index) => (
            <div key={index} className="bg-green-dark text-md lg:text-xl flex items-center justify-center text-center border border-green-secondary bg-opacity-40 p-4 rounded-full shadow-md hover:bg-green-secondary hover:bg-opacity-30 transition-all duration-300">
              <p className="text-gray-300 font-nunito">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurResearch;