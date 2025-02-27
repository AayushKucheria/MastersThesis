"use client";

import { useState, useEffect } from 'react';

// Define the props interface for the component
interface DiscussionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const DiscussionSlideTemplate = ({ currentSubsection = 'theoretical', updateCurrentSubsection }: DiscussionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = {
    'theoretical': 0,
    'practical': 1,
    'limitations': 2
  };
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = {
    0: 'theoretical',
    1: 'practical',
    2: 'limitations'
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
      title: "Theoretical Implications",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Theoretical Implications</h2>
            <p className="text-teal-100 text-lg">Connecting findings to broader frameworks</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Fluid Interfaces vs. Fixed Patterns</h3>
                <div className="bg-teal-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800">
                    Our findings reveal a fundamental tension: despite the surface-level fluidity of LLM interactions, fixed behavioral patterns emerge that are distinct from human tutoring approaches.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">QWERTY phenomenon in action</span>: New technical constraints emerge from training methods rather than intentional design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Statistical vs. cognitive scaffolding</span>: LLMs&apos; patterns reflect statistical regularities rather than pedagogical theory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Emergent interaction styles</span>: Different models develop distinctive patterns despite similar training objectives</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Implications for Learning Theory</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Constructivist Learning</div>
                    <p className="text-sm mt-1">
                      The tendency toward complex responses suggests LLMs may prioritize information delivery over the incremental knowledge construction that constructivist theory emphasizes.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Zone of Proximal Development</div>
                    <p className="text-sm mt-1">
                      Human tutors&apos; preference for simpler interactions may better align with Vygotsky&apos;s ZPD theory, which suggests learning is optimized through targeted guidance within the learner&apos;s current capabilities.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Medium vs. Tool Paradigm</div>
                    <p className="text-sm mt-1">
                      While LLMs&apos; flexibility suggests potential as a medium for exploration, their fixed response patterns reveal aspects still operating within the tool paradigm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-teal-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                </div>
                <p className="ml-2 text-gray-800">
                  <span className="font-medium text-teal-700">Key insight:</span> LLMs represent a hybrid educational technology that combines unprecedented flexibility with new forms of fixed patterns, challenging us to develop new theoretical frameworks for understanding AI-powered learning.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Design Considerations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Response complexity guidance</span>: Systems may benefit from explicit guidance on response complexity to better match human tutoring patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Model selection impact</span>: Choice of underlying model significantly affects interaction style and should match pedagogical goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Context-sensitive prompting</span>: Designing prompts that adapt based on student situation could improve pedagogical alignment</span>
                  </li>
                </ul>
                
                <div className="mt-4 bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-medium text-teal-700 mb-2">Beyond Model Selection</h4>
                  <p className="text-sm text-gray-700">
                    Rather than viewing divergence from human patterns as necessarily problematic, designers might identify specific contexts where different interaction styles are most beneficial.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Implementation Approaches</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-teal-700 mb-2">Hybrid Tutoring Systems</h4>
                  <div className="flex">
                    <div className="w-1/2 pr-2">
                      <p className="text-sm font-medium mb-1">Human-Like Approach</p>
                      <ul className="text-xs space-y-1 text-gray-700 list-disc pl-4">
                        <li>Single-action responses for initial instruction</li>
                        <li>Focused guidance on specific errors</li>
                        <li>Brief affirmations for correct answers</li>
                      </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                      <p className="text-sm font-medium mb-1">LLM-Native Approach</p>
                      <ul className="text-xs space-y-1 text-gray-700 list-disc pl-4">
                        <li>Multi-action responses for concept reviews</li>
                        <li>Comprehensive explanations for complex topics</li>
                        <li>Varied examples for different learning styles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-teal-700 mb-2">Educational Adaptation Framework</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    A proposed framework for adapting LLM tutoring to different educational contexts:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-teal-50 p-2 rounded">
                      <div className="font-medium">Novice Learning</div>
                      <p>Focus on simpler, human-like interactions with clear, focused guidance</p>
                    </div>
                    <div className="bg-teal-50 p-2 rounded">
                      <div className="font-medium">Expert Learning</div>
                      <p>Leverage comprehensive responses with rich connections between concepts</p>
                    </div>
                    <div className="bg-teal-50 p-2 rounded">
                      <div className="font-medium">Procedural Knowledge</div>
                      <p>Direct, step-by-step guidance with single-action focus</p>
                    </div>
                    <div className="bg-teal-50 p-2 rounded">
                      <div className="font-medium">Conceptual Knowledge</div>
                      <p>Multi-perspective explanations with varied examples</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-700 font-bold">!</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Design Recommendation</p>
                  <p className="text-sm text-gray-700">
                    Rather than forcing LLMs to mimic human tutoring patterns exactly, educational designers should develop new frameworks that strategically leverage different interaction patterns for different learning contexts.
                  </p>
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Research Limitations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Dataset specificity</span>: Focused only on Italian preposition learning, limiting generalizability to other domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Tutor population</span>: Relied on crowdsourced rather than professional tutors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">No learning outcomes</span>: Analysis focused on behavioral patterns rather than effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Controlled environment</span>: Interactions occurred in a structured setting rather than natural learning contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span><span className="font-medium">Model timing</span>: Research used specific versions of LLMs that may be superseded by newer models</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Future Research Directions</h3>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Domain Expansion</div>
                    <p className="text-sm mt-1">
                      Extend analysis to more complex domains such as mathematics, science, and creative writing to identify domain-specific interaction patterns
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Base Model Behavior</div>
                    <p className="text-sm mt-1">
                      Investigate how pre-training vs. instruction tuning affects tutoring patterns by comparing base LLMs with fine-tuned versions
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Learning Outcomes</div>
                    <p className="text-sm mt-1">
                      Conduct controlled studies to evaluate how different interaction patterns affect actual student learning and satisfaction
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="font-medium text-teal-700">Intervention Strategies</div>
                    <p className="text-sm mt-1">
                      Test different prompting approaches designed to elicit more human-like tutoring patterns when pedagogically beneficial
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-md font-semibold mb-2 text-teal-800">Methodological Extensions</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>Longitudinal studies of interaction evolution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>Multi-turn analysis beyond single responses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>Cross-cultural tutoring pattern comparison</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold mb-2 text-teal-800">Theoretical Questions</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>Do LLM patterns represent a new pedagogy?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>How does model architecture influence teaching style?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>Can fluid/fixed pattern framework apply beyond education?</span>
                    </li>
                  </ul>
                </div>
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