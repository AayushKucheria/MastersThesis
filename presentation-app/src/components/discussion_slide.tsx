"use client";

import { useState, useEffect, useMemo } from 'react';
import { 
  Book, 
  Lightbulb, 
  Brain, 
  LayoutGrid, 
  Code, 
  Sparkles,
  Puzzle,
  BarChart
} from 'lucide-react';

// Define the props interface for the component
interface DiscussionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const DiscussionSlideTemplate = ({ currentSubsection = 'theoretical', updateCurrentSubsection }: DiscussionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'theoretical': 0,
    'practical': 1,
    'limitations': 2
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'theoretical',
    1: 'practical',
    2: 'limitations'
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
  
  const slides = [
    {
      title: "Theoretical Implications",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Theoretical Implications</h2>
            <p className="text-teal-100 text-lg">Connecting findings to broader frameworks</p>
          </div>
          
          <div className="p-6">
            {/* Interactive Concept Map Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-3">
                  <Puzzle className="h-6 w-6 text-teal-600 mr-2" />
                  <h3 className="text-xl font-semibold text-teal-800">Key Tensions</h3>
                </div>
                
                {/* Visual quote with border styling */}
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 mb-4">
                  <p className="text-gray-800 italic">
                    &quot;Despite surface-level fluidity of interactions, fixed behavioral patterns emerge in LLMs that differ systematically from human tutoring approaches.&quot;
                  </p>
                  <p className="text-xs text-right mt-1 text-teal-700">— Thesis p.87</p>
                </div>
                
                <div className="space-y-3">
                  {/* Visual concept cards with icons */}
                  <div className="bg-white border border-teal-200 rounded-lg p-3 shadow-sm flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-800">QWERTY Phenomenon</h4>
                      <p className="text-sm text-gray-600">New constraints emerge from training rather than design</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-teal-200 rounded-lg p-3 shadow-sm flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Brain className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-800">Statistical vs. Cognitive</h4>
                      <p className="text-sm text-gray-600">LLMs reflect statistical patterns over pedagogical theory</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-teal-200 rounded-lg p-3 shadow-sm flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Sparkles className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-800">Emergent Styles</h4>
                      <p className="text-sm text-gray-600">Different models develop distinct patterns</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Book className="h-6 w-6 text-teal-600 mr-2" />
                  <h3 className="text-xl font-semibold text-teal-800">Learning Theory Impact</h3>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
                      <h4 className="font-medium text-teal-700 text-sm">Constructivist Learning</h4>
                      <div className="border-t border-dashed border-gray-200 my-1"></div>
                      <p className="text-xs text-gray-600">LLMs prioritize information delivery over incremental construction</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
                      <h4 className="font-medium text-teal-700 text-sm">Zone of Proximal Development</h4>
                      <div className="border-t border-dashed border-gray-200 my-1"></div>
                      <p className="text-xs text-gray-600">Human tutors use simpler interactions optimized for learner&apos;s current capabilities</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200 flex items-start">
                      <div>
                        <h4 className="font-medium text-teal-700 text-sm">Medium vs. Tool Paradigm</h4>
                        <p className="text-xs text-gray-600">LLMs offer exploration flexibility yet operate in fixed tool-like patterns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-teal-600 mr-3"></div>
                <p className="text-gray-800">
                  <span className="font-medium text-teal-700">Key insight:</span> LLMs combine unprecedented flexibility with distinctive fixed patterns, challenging us to develop new theoretical frameworks for AI-powered learning
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Practical Implications",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Practical Implications</h2>
            <p className="text-teal-100 text-lg">Design considerations for AI tutoring systems</p>
          </div>
          
          <div className="p-6">
            {/* Main assertion quote - Updated to match theoretical section style */}
            <div className="mb-6">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <p className="text-gray-800 italic">
                  &quot;The distinctive patterns found in LLM tutoring suggest a need for intentional design choices that strategically leverage their unique capabilities.&quot;
                </p>
                <p className="text-xs text-right mt-1 text-teal-700">— Thesis p.92</p>
              </div>
            </div>
            
            {/* Main content with 3 focused points - Made cards smaller */}
            <div className="grid grid-cols-1 gap-4">
              {/* KEY POINT 1 */}
              <div className="bg-white rounded-lg p-3 border-l-4 border-teal-500 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <LayoutGrid className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-1">Design Considerations</h3>
                    <p className="text-sm text-gray-700">
                      Rather than viewing divergence from human patterns as problematic, focus on understanding when different approaches are most effective.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* KEY POINT 2 */}
              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">Model Selection Impact</h3>
                    <p className="text-sm text-gray-700">
                      Different models create distinct teaching styles that impact the learning experience beyond simple performance metrics.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* KEY POINT 3 - Simplified text */}
              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <Code className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-1">Interaction Design</h3>
                    <p className="text-sm text-gray-700">
                      AI tutors respond differently to student actions compared to humans. We need clearer guidelines for how AI systems should respond to different types of student questions and mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom recommendation/summary */}
            <div className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
              <div className="flex items-center">
                <div className="bg-teal-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-teal-700" />
                </div>
                <p className="text-gray-800">
                  <span className="font-medium">Key recommendation:</span> Develop strategic frameworks that leverage AI interaction patterns for specific learning contexts rather than forcing them to mimic human patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Limitations & Future Directions",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Limitations & Future Directions</h2>
            <p className="text-teal-100 text-lg">Constraints and opportunities for further research</p>
          </div>
          
          <div className="p-6">
            {/* Core assertion in a clean, simple style */}
            <div className="mb-5 bg-gray-50 p-3 rounded-lg border-l-4 border-teal-500">
              <p className="text-gray-700 italic text-sm">
                Rather than viewing differences as limitations, they represent opportunities for new hybrid approaches
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LIMITATIONS COLUMN - Simplified */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-teal-800">Research Scope</h3>
                </div>
                
                {/* Limitations in a cleaner list format */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Book className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Italian prepositions only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Code className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Three models examined</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <BarChart className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Patterns vs. learning outcomes</p>
                    </div>
                  </div>
                </div>
                
                {/* Simple hybrid concept */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-3">Hybrid Approach Opportunity</h4>
                  <div className="flex items-center justify-between px-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">Human</div>
                      <div className="bg-gray-100 p-2 rounded-full mx-auto">
                        <Brain className="h-4 w-4 text-teal-600" />
                      </div>
                    </div>
                    <div className="flex-grow mx-4 border-t border-dashed border-gray-300"></div>
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">AI</div>
                      <div className="bg-gray-100 p-2 rounded-full mx-auto">
                        <Sparkles className="h-4 w-4 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FUTURE DIRECTIONS COLUMN - Simplified */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-teal-800">Future Research</h3>
                </div>
                
                {/* Future directions in a cleaner format */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-5">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Brain className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">Base Models</h4>
                        <p className="text-xs text-gray-600">Effects of pre-training vs. instruction tuning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <BarChart className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">Learning Outcomes</h4>
                        <p className="text-xs text-gray-600">How patterns affect student learning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <LayoutGrid className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">Model Diversity</h4>
                        <p className="text-xs text-gray-600">Broader range of architectures</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Theoretical connection */}
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Book className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Papert&apos;s Vision</h4>
                    <p className="text-xs text-gray-600">
                      Computers as learning medium but with their own emerging patterns rather than neutral tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-100 pt-4 text-center">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-teal-700">Key insight:</span> We need new theoretical frameworks to understand fluid yet patterned AI teaching
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
            Discussion - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-teal-600 text-white' 
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
              : 'bg-teal-600 text-white hover:bg-teal-700'
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
                currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
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
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DiscussionSlideTemplate;