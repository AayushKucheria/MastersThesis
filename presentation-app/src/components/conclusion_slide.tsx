"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface ConclusionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConclusionSlideTemplate = ({ currentSubsection = 'findings', updateCurrentSubsection }: ConclusionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'findings': 0,
    'significance': 1
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'findings',
    1: 'significance'
  }), []);
  
  // Set the current slide based on the subsection prop
  const [currentSlide, setCurrentSlide] = useState(subsectionMap[currentSubsection as keyof typeof subsectionMap] || 0);
  
  // Update the current slide when the subsection prop changes
  useEffect(() => {
    const slideIndex = subsectionMap[currentSubsection as keyof typeof subsectionMap];
    if (slideIndex !== undefined) {
      setCurrentSlide(slideIndex);
    }
  }, [currentSubsection, subsectionMap]);
  
  // Function to handle slide changes
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    // Sync with parent component if the updateCurrentSubsection function is provided
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };
  
  // This is a placeholder - your actual slides would be defined here
  const slides = [
    {
      title: "Key Findings",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Key Findings</h2>
            <p className="text-amber-100 text-lg">Summary of research outcomes</p>
          </div>
          
          <div className="p-6">
            {/* Opening statement */}
            <div className="mb-5 bg-gray-50 p-3 rounded-lg border-l-4 border-amber-500">
              <p className="text-gray-700 text-sm">
                Even as language models enable more natural educational interactions than any previous system, they simultaneously exhibit characteristic patterns distinct from human teaching.
              </p>
            </div>
            
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Key Dynamics</h3>
            
            {/* Finding 1 */}
            <div className="mb-4 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start">
                <div className="bg-amber-50 rounded-full h-6 w-6 flex items-center justify-center text-amber-700 font-semibold mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Response Structure</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    While both use hints, AI tutors consistently prefer complex multi-action responses, whereas human tutors favor focused, single-action interventions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Finding 2 */}
            <div className="mb-4 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start">
                <div className="bg-amber-50 rounded-full h-6 w-6 flex items-center justify-center text-amber-700 font-semibold mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Distinctive Patterns</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Each AI model develops its own consistent interaction pattern that differs both from human tutors and from other models.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Finding 3 */}
            <div className="mb-4 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start">
                <div className="bg-amber-50 rounded-full h-6 w-6 flex items-center justify-center text-amber-700 font-semibold mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Response Mapping</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    AI tutors show less distinct mappings between student actions and tutor responses compared to the clear patterns exhibited by human teachers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual summary */}
            <div className="mt-5 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-center px-4">
                  <div className="text-xs text-gray-500 mb-1">Human Tutors</div>
                  <div className="bg-gray-100 rounded-lg p-2 text-xs text-gray-700">
                    Focused interventions
                  </div>
                </div>
                <div className="text-center flex-grow px-4">
                  <div className="text-xs text-gray-500 mb-1">vs.</div>
                  <div className="border-t border-dashed border-gray-300 mt-2"></div>
                </div>
                <div className="text-center px-4">
                  <div className="text-xs text-gray-500 mb-1">AI Tutors</div>
                  <div className="bg-gray-100 rounded-lg p-2 text-xs text-gray-700">
                    Complex, model-specific patterns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Broader Significance",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Broader Significance</h2>
            <p className="text-amber-100 text-lg">Implications for the field</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Theoretical Implications */}
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Theoretical Insights</h3>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">New Frameworks Needed</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        We need frameworks that account for how systems maintain adaptivity while developing fixed patterns
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Tension as a Feature</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        The tension between fluid interfaces and fixed patterns emerges as a characteristic to be understood
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Practical Implications */}
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Practical Applications</h3>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Leverage Unique Patterns</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Effective ITS will come from understanding and leveraging these systems' characteristic patterns
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Complementary Approach</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        A future where AI tutors don't simply replicate human teaching strategies but complement them with distinctive interaction patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-100 pt-4 text-center">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-amber-700">Looking forward:</span> Focus on understanding behavioral patterns while ensuring pedagogical effectiveness will be crucial for realizing the potential of AI in education
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            Conclusion - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
        {slides[currentSlide].content}
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <button 
          onClick={() => currentSlide > 0 && handleSlideChange(currentSlide - 1)} 
          disabled={currentSlide === 0}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-amber-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => currentSlide < slides.length - 1 && handleSlideChange(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === slides.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConclusionSlideTemplate;