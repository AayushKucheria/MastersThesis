"use client";

import { useState, useEffect } from 'react';

// Define the props interface for the component
interface MethodologySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const MethodologySlideTemplate = ({ currentSubsection = 'dataset', updateCurrentSubsection }: MethodologySlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = {
    'dataset': 0,
    'implementation': 1,
    'framework': 2
  };
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = {
    0: 'dataset',
    1: 'implementation',
    2: 'framework'
  };
  
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
      title: "CIMA Dataset",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">CIMA Dataset</h2>
            <p className="text-green-100 text-lg">Italian language learning tutoring interactions</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Key Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><span className="font-medium">391</span> exercises across <span className="font-medium">77</span> students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><span className="font-medium">Multiple</span> valid tutor responses per interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Focuses on Italian preposition learning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Sample Interaction</h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-1">Exercise: Translate &quot;I&apos;m going to the store&quot;</div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">STUDENT:</div>
                    <p className="text-gray-800">"Vado a il negozio"</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">TUTOR A:</div>
                    <p className="text-gray-800">You're close! Remember that 'a' + 'il' combine to form 'al'.</p>
                    <div className="text-xs text-gray-500 mt-1">Hint + Correction</div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">TUTOR B:</div>
                    <p className="text-gray-800">Good try! Can you remember what happens when 'a' and 'il' come together?</p>
                    <div className="text-xs text-gray-500 mt-1">Question + Hint</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 italic">
                    Action labels illustrate how different tutors approach the same student input.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-green-700">Dataset selection rationale:</span> Multiple valid responses per student interaction provides an ideal baseline for comparing human and AI tutoring patterns.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Model Implementation",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Model Implementation</h2>
            <p className="text-green-100 text-lg">Generating comparable AI tutoring responses</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Selected Models</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">GPT-4o</div>
                    <p className="text-sm mt-1">OpenAI's instruction-tuned model</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">Gemini Pro 1.5</div>
                    <p className="text-sm mt-1">Google's instruction-tuned model</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">LLaMa 3.1 405B</div>
                    <p className="text-sm mt-1">Meta's instruction-tuned model</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Consistent Prompting Approach</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                    <p>// Sample prompt structure</p>
                    <p className="mt-1">You are a language tutor teaching Italian.</p>
                    <p className="mt-1">Available actions:</p>
                    <p>- Question - Hint</p>
                    <p>- Correction - Confirmation</p>
                    <p className="mt-2">// Context</p>
                    <p>Target phrase (IT):</p>
                    <p>{"{target_phrase}"}</p>
                    <p>Grammar rules:</p>
                    <p>{"{grammar_rules}"}</p>
                    <p className="mt-2">// Student interaction</p>
                    <p>Conversation history:</p>
                    <p>{"{conversation_history}"}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm italic">
                      "To ensure consistent comparison with human tutors, we developed a structured prompting system that provides each model with equivalent context to what human tutors received in the original dataset."
                    </p>
                    <p className="text-xs text-right mt-1">— Master's Thesis, p.36</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-green-700">Key methodological consideration:</span> All models are instruction-tuned to isolate differences in tutoring behavior rather than basic conversational ability. Using the same prompt structure across models ensures fair comparison of natural interaction patterns.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Analytical Framework",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Analytical Framework</h2>
            <p className="text-green-100 text-lg">Systematic approach to tutoring interaction analysis</p>
          </div>
          
          <div className="p-6">
            <div className="mb-3 bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-700 italic text-sm">
                "Our analysis framework enables measurement of several key dimensions of tutoring behavior, focusing on action distributions, response complexity, and conditional patterns."
              </p>
              <p className="text-xs text-right mt-1">— Master's Thesis, p.38</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Action Distribution</h3>
                <p className="text-sm text-gray-700 mb-3">Frequency analysis of tutoring actions:</p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Hints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Corrections/Confirmations</span>
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500 italic">Identifies baseline preferences in tutoring strategies.</div>
              </div>
              
              <div className="col-span-3 md:col-span-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Response Complexity</h3>
                <p className="text-sm text-gray-700 mb-3">Multi-action pattern analysis:</p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Number of actions per response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Response length patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Common action combinations</span>
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500 italic">Reveals differences in communication patterns.</div>
              </div>
              
              <div className="col-span-3 md:col-span-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Interaction Flow</h3>
                <p className="text-sm text-gray-700 mb-2">Conditional response analysis:</p>
                
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-50 px-3 py-2 rounded-md">
                    <p className="text-sm font-medium text-center text-blue-800">Student Actions</p>
                  </div>
                  <div className="mx-2 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 7L18 12L13 17" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12H18" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bg-green-50 px-3 py-2 rounded-md">
                    <p className="text-sm font-medium text-center text-green-800">Tutor Responses</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-700 px-1">
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded">Guess</span>
                    <span className="text-green-600">→</span>
                    <span className="bg-green-50 text-green-800 px-2 py-1 rounded">Pattern A</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded">Question</span>
                    <span className="text-green-600">→</span>
                    <span className="bg-green-50 text-green-800 px-2 py-1 rounded">Pattern B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded">Affirmation</span>
                    <span className="text-green-600">→</span>
                    <span className="bg-green-50 text-green-800 px-2 py-1 rounded">Pattern C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded">Other</span>
                    <span className="text-green-600">→</span>
                    <span className="bg-green-50 text-green-800 px-2 py-1 rounded">Pattern D</span>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-gray-500 italic">Examines how tutors adapt their strategies to different student behaviors.</div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-green-700">Population-level analysis:</span> Our approach examines aggregate patterns rather than individual responses, allowing for more robust comparison of human and AI tutoring behaviors.
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
            Methodology - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-green-600 text-white' 
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
              : 'bg-green-600 text-white hover:bg-green-700'
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
                currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
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
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MethodologySlideTemplate;