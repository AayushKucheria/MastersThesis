import React from 'react';
import Image from 'next/image';

/**
 * Clean, focused title slide that matches the presentation design pattern
 */
const TitleSlideTemplate = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full text-center">
          {/* Logo/University affiliation */}
          <div className="mb-8 relative h-16">
            <Image 
              src="/aalto_logo.png" 
              alt="Aalto University" 
              width={160}
              height={64}
              className="mx-auto"
              priority
            />
          </div>

          {/* Main title with enhanced hierarchy */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-4">
            Fluid Interfaces and Fixed Patterns
          </h1>
          
          {/* Subtitle with proper spacing */}
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-10">
            Understanding LLM Behavior in Educational Contexts
          </h2>
          
          {/* Keywords/tags from thesis abstract */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8">
            {['Large Language Models', 'Tutoring Behavior', 'Educational Technology', 'Human-AI Interaction', 'Action Pattern Analysis', 'Intelligent Tutoring Systems'].map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Author and affiliations */}
          <div className="mt-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Aayush Kucheria</h3>
            <p className="text-gray-600 mt-1">Master&apos;s Thesis | 2024</p>
            <p className="text-gray-600">Aalto University, Finland</p>
          </div>
          
          {/* Advisor/supervisor information */}
          <div className="mt-6 bg-gray-50 py-3 px-6 rounded-lg inline-block">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Supervisor:</span> Prof. Nitin Sawhney
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Advisor:</span> Prof. Tomi Kauppinen
            </p>
          </div>
        </div>
        
        {/* Presentation start hint without animation */}
        <div className="mt-12 text-gray-500 text-sm">
          Press spacebar or navigate using the controls to begin
        </div>
      </div>
      
      {/* Bottom gradient bar - refined with more academic feel */}
      <div className="h-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700"></div>
    </div>
  );
};

export default TitleSlideTemplate;