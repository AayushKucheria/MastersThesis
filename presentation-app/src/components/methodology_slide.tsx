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
  }, [currentSubsection]);
  
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
                <h3 className="text-xl font-semibold mb-3 text-green-800">Dataset Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><span className="font-medium">391</span> exercises across <span className="font-medium">77</span> students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><span className="font-medium">2,880</span> tutor responses from <span className="font-medium">209</span> tutors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Focus on Italian preposition learning for English speakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Each student interaction has <span className="font-medium">multiple</span> valid tutor responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Published by Stasaski et al. (2020) at ACL Conference</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Interaction Example</h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Exercise Context:</div>
                    <p className="text-gray-800">Translate: "I'm going to the store" (Focus on correct preposition)</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Student:</div>
                    <p className="text-gray-800">"Vado a il negozio"</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Human Tutor Response:</div>
                    <p className="text-gray-800">You're close! Remember that 'a' + 'il' combine to form 'al'.</p>
                  </div>
                  
                  <div className="text-xs text-gray-500 italic">
                    Note: This simplified example shows the structure of interactions in the dataset.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-green-700">Dataset selection rationale:</span> The CIMA dataset provides a controlled environment with well-structured tutoring interactions and multiple human tutor responses per student action, making it ideal for comparative analysis with LLM-generated tutoring.
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
                    <div className="font-medium text-green-700">GPT-4</div>
                    <p className="text-sm mt-1">OpenAI's most advanced model (gpt-4-0314), instruction-tuned with RLHF</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">Gemini Pro</div>
                    <p className="text-sm mt-1">Google's multimodal model, instruction-tuned with comparable capabilities</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">LLaMA 405b</div>
                    <p className="text-sm mt-1">Meta's 405B parameter model with instruction tuning</p>
                  </li>
                </ul>
                
                <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-sm">
                  <span className="font-medium text-yellow-700">Selection rationale:</span> All models are instruction-tuned to isolate differences in interaction patterns rather than basic conversational ability.
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Implementation Approach</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">Consistent Prompting Structure</div>
                    <p className="text-sm mt-1">Models were provided with identical context about:</p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>The tutoring scenario</li>
                      <li>Relevant Italian grammar rules</li>
                      <li>Student's current state in the exercise</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">Response Format</div>
                    <p className="text-sm mt-1">All models generated responses in the same structured format as human tutors in the CIMA dataset, allowing for direct comparison.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700">Example Prompt Structure</div>
                    <p className="text-xs mt-1 bg-gray-100 p-2 rounded">
                      You are a tutor helping a student learn Italian prepositions. The student is trying to translate "<i>I'm going to the store</i>" and has written "<i>Vado a il negozio</i>". Provide a helpful tutoring response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-green-700">Key methodological consideration:</span> By using the same prompt structure across all models and maintaining consistency with the human tutoring context, this approach enables fair comparison of natural interaction patterns.
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
                    <span>Affirmations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Contextual information</span>
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500 italic">Compared across human and AI tutors to identify baseline preferences.</div>
              </div>
              
              <div className="col-span-3 md:col-span-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Response Complexity</h3>
                <p className="text-sm text-gray-700 mb-3">Analysis of multi-action patterns:</p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Number of actions per response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Response length and structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Common action combinations</span>
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500 italic">Investigates differences in communication complexity between human and AI tutors.</div>
              </div>
              
              <div className="col-span-3 md:col-span-1 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Interaction Flow</h3>
                <p className="text-sm text-gray-700 mb-3">Conditional response analysis:</p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Student question → Tutor action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Student guess → Tutor action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Student confusion → Tutor action</span>
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500 italic">Examines how tutors adapt their strategies to different student behaviors.</div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="ml-2 text-gray-800">
                  <span className="font-medium text-green-700">Analytical approach:</span> This multi-dimensional framework allows for systematic comparison of interaction patterns across different tutors, revealing both surface-level similarities and deeper structural differences.
                </p>
              </div>
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