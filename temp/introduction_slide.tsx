import React, { useState } from 'react';

const IntroductionSlideTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Research Focus & Significance",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Fluid Interfaces and Fixed Patterns</h2>
            <p className="text-blue-100 text-lg">Understanding LLM Behavior in Educational Contexts</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Research Focus</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Examining behavioral patterns in LLM tutoring interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Comparing AI tutoring patterns with human tutoring approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Identifying systematic interaction differences rather than focusing on learning outcomes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Significance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>LLMs represent a paradigm shift in educational technology with unprecedented natural language capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Understanding emergent patterns informs design of future AI tutoring systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Reveals tensions between surface-level fluidity and underlying fixed patterns</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-blue-700">Key insight:</span> Despite their apparent flexibility, LLMs exhibit distinctive interaction patterns that differ from human tutors in systematic ways.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Research Questions",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Research Questions</h2>
            <p className="text-blue-100 text-lg">Examining the core inquiries driving this research</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">RQ1: Behavioral Patterns</h3>
                <p className="text-gray-700">How do artificial tutoring systems naturally behave given the same context as human tutors?</p>
                <p className="mt-2 text-sm text-gray-600 italic">Investigates the baseline interaction patterns that emerge naturally without specific behavioral guidance.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">RQ2: Systematic Differences</h3>
                <p className="text-gray-700">What systematic differences emerge in interaction structure between human and AI tutors?</p>
                <p className="mt-2 text-sm text-gray-600 italic">Explores specific patterns in response complexity, action distribution, and interaction flow.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">RQ3: Contextual Adaptation</h3>
                <p className="text-gray-700">How do AI tutors adapt teaching strategies to different student behaviors?</p>
                <p className="mt-2 text-sm text-gray-600 italic">Examines conditional responses to student questions, guesses, and statements.</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                <span className="font-medium">Methodological approach:</span> Analysis of the CIMA dataset extended with AI-generated tutoring responses from GPT-4, Gemini Pro, and LLaMA 405b.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Thesis Roadmap",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Thesis Roadmap</h2>
            <p className="text-blue-100 text-lg">Navigating through this research</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded-lg h-full">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Theoretical Foundations</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Historical evolution of tutoring systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>The QWERTY phenomenon in educational technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Shift from tools to mediums</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>LLMs as educational interfaces</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded-lg h-full">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Methodology</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>CIMA dataset analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Model implementation approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Analytical framework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Interaction analysis methods</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded-lg h-full">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Results & Discussion</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Action distribution patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Response complexity patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Interaction flow analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span>Theoretical & practical implications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 font-medium">This presentation provides an overview of key findings and implications, with emphasis on the tension between fluid interfaces and fixed patterns in LLM tutoring.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">
          Introduction Section - Slide {currentSlide + 1} of {slides.length}
        </div>
        {slides[currentSlide].content}
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          onClick={handlePrev} 
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-md ${
            currentSlide === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroductionSlideTemplate;