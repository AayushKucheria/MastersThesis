"use client";

import { useState, useEffect, useMemo, ReactElement, ReactNode } from 'react';

// Define the props interface for the component
interface ResultsSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

// Define slide interface for better typing
interface Slide {
  title: string;
  content: ReactNode;
}

const ResultsSlideTemplate = ({ currentSubsection = 'distribution', updateCurrentSubsection }: ResultsSlideProps): ReactElement => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'distribution': 0,
    'complexity': 1,
    'flows': 2
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'distribution',
    1: 'complexity',
    2: 'flows'
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
  const handleSlideChange = (index: number): void => {
    setCurrentSlide(index);
    // Sync with parent component if the updateCurrentSubsection function is provided
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };
  
  // This is a placeholder - your actual slides would be defined here
  const slides: Slide[] = [
    {
        title: "Action Distribution",
        content: (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">Action Distribution</h2>
              <p className="text-purple-100 text-lg">Comparing human vs. AI tutoring actions</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">Key Insights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Both human and AI tutors prefer <span className="font-medium">hints</span> (~45%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Humans balance <span className="font-medium">questions</span> and <span className="font-medium">corrections</span> equally (~20% each)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">AI systems favor <span className="font-medium">corrections</span> (~30%) over <span className="font-medium">questions</span> (~5%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">LLaMA's profile most resembles human tutors</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2">Implications</h4>
                    <p className="text-gray-700 text-sm">
                      Humans adopt a more <span className="font-medium">Socratic approach</span> with questions, 
                      while AI systems prefer <span className="font-medium">directive guidance</span> through corrections.
                      These differences persist despite LLMs being trained on human content.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <div className="px-3 py-2 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800">Action Distribution</h4>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
                          <span>Human</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-600 rounded-sm mr-1"></div>
                          <span>AI (avg)</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart visualization inspired by the bar charts */}
                    <div className="pt-6 pb-2 px-4">
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Hints</div>
                          <div className="text-xs text-gray-500">~45%</div>
                        </div>
                        <div className="relative h-8 flex">
                          <div className="absolute inset-y-0 left-0 w-[45%] bg-blue-500 rounded-l-sm"></div>
                          <div className="absolute inset-y-0 left-0 w-[45%] bg-purple-600 rounded-r-sm opacity-70 translate-y-2"></div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Questions</div>
                          <div className="text-xs text-gray-500">Human: 20% | AI: 5%</div>
                        </div>
                        <div className="relative h-8 flex">
                          <div className="absolute inset-y-0 left-0 w-[20%] bg-blue-500 rounded-l-sm"></div>
                          <div className="absolute inset-y-0 left-0 w-[5%] bg-purple-600 rounded-r-sm opacity-70 translate-y-2"></div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Corrections</div>
                          <div className="text-xs text-gray-500">Human: 20% | AI: 30%</div>
                        </div>
                        <div className="relative h-8 flex">
                          <div className="absolute inset-y-0 left-0 w-[20%] bg-blue-500 rounded-l-sm"></div>
                          <div className="absolute inset-y-0 left-0 w-[30%] bg-purple-600 rounded-r-sm opacity-70 translate-y-2"></div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Confirmations</div>
                          <div className="text-xs text-gray-500">Human: 15% | AI: 10%</div>
                        </div>
                        <div className="relative h-8 flex">
                          <div className="absolute inset-y-0 left-0 w-[15%] bg-blue-500 rounded-l-sm"></div>
                          <div className="absolute inset-y-0 left-0 w-[10%] bg-purple-600 rounded-r-sm opacity-70 translate-y-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex-1">
                      <h5 className="text-xs font-semibold text-blue-800 mb-1">Model Variations</h5>
                      <div className="flex space-x-2 text-xs">
                        <div className="flex-1 bg-white p-2 rounded border border-gray-200">
                          <div className="font-medium text-gray-900 mb-1">LLaMA 3.1</div>
                          <div className="text-gray-600">More human-like profile</div>
                        </div>
                        <div className="flex-1 bg-white p-2 rounded border border-gray-200">
                          <div className="font-medium text-gray-900 mb-1">GPT-4o/Gemini</div>
                          <div className="text-gray-600">Favor corrections</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="text-xs text-gray-500 italic">
                  Based on analysis of CIMA dataset and LLM-generated tutoring responses
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Response Complexity",
        content: (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">Response Complexity</h2>
              <p className="text-purple-100 text-lg">Number of actions per tutoring response</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">Key Differences</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Human tutors strongly prefer <span className="font-medium">single-action</span> responses (~70%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">AI tutors favor <span className="font-medium">dual-action</span> responses, with model variations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">LLaMA shows strongest preference for dual-actions (>80%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">GPT-4o and Gemini are more balanced but still favor complexity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2">Teaching Philosophy</h4>
                    <p className="text-gray-700 text-sm">
                      Human preference for single actions suggests understanding of <span className="font-medium">cognitive load theory</span>, 
                      while AI systems' complex responses imply a model of teaching as <span className="font-medium">information delivery</span> 
                      rather than guided discovery.
                    </p>
                  </div>
                </div>
                
                <div>
                  {/* Visual chart showing the histograms */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-800">Actions per Response</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1 p-3">
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="text-xs font-medium text-center text-gray-600 mb-2">Human Tutors (CIMA)</div>
                        <div className="h-32 relative">
                          {/* Bar chart for human */}
                          <div className="absolute bottom-0 left-[15%] w-[15%] bg-blue-500 h-[70%]"></div>
                          <div className="absolute bottom-0 left-[40%] w-[15%] bg-blue-500 h-[25%]"></div>
                          <div className="absolute bottom-0 left-[65%] w-[15%] bg-blue-500 h-[5%]"></div>
                          
                          {/* X-axis labels */}
                          <div className="absolute bottom-[-20px] left-[15%] text-xs text-gray-600">1</div>
                          <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-600">2</div>
                          <div className="absolute bottom-[-20px] left-[65%] text-xs text-gray-600">3</div>
                          
                          {/* Y-axis labels */}
                          <div className="absolute bottom-0 left-[-15px] text-xs text-gray-600">0%</div>
                          <div className="absolute bottom-[35%] left-[-15px] text-xs text-gray-600">35%</div>
                          <div className="absolute bottom-[70%] left-[-15px] text-xs text-gray-600">70%</div>
                        </div>
                        <div className="text-xs text-center text-gray-500 mt-5">Number of Actions</div>
                      </div>
                      
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="text-xs font-medium text-center text-gray-600 mb-2">LLaMA 3.1</div>
                        <div className="h-32 relative">
                          {/* Bar chart for LLaMA */}
                          <div className="absolute bottom-0 left-[15%] w-[15%] bg-purple-600 h-[8%]"></div>
                          <div className="absolute bottom-0 left-[40%] w-[15%] bg-purple-600 h-[82%]"></div>
                          <div className="absolute bottom-0 left-[65%] w-[15%] bg-purple-600 h-[10%]"></div>
                          
                          {/* X-axis labels */}
                          <div className="absolute bottom-[-20px] left-[15%] text-xs text-gray-600">1</div>
                          <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-600">2</div>
                          <div className="absolute bottom-[-20px] left-[65%] text-xs text-gray-600">3</div>
                          
                          {/* Y-axis labels */}
                          <div className="absolute bottom-0 left-[-15px] text-xs text-gray-600">0%</div>
                          <div className="absolute bottom-[40%] left-[-15px] text-xs text-gray-600">40%</div>
                          <div className="absolute bottom-[80%] left-[-15px] text-xs text-gray-600">80%</div>
                        </div>
                        <div className="text-xs text-center text-gray-500 mt-5">Number of Actions</div>
                      </div>
                      
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="text-xs font-medium text-center text-gray-600 mb-2">GPT-4o</div>
                        <div className="h-32 relative">
                          {/* Bar chart for GPT-4o */}
                          <div className="absolute bottom-0 left-[15%] w-[15%] bg-emerald-500 h-[30%]"></div>
                          <div className="absolute bottom-0 left-[40%] w-[15%] bg-emerald-500 h-[65%]"></div>
                          <div className="absolute bottom-0 left-[65%] w-[15%] bg-emerald-500 h-[5%]"></div>
                          
                          {/* X-axis labels */}
                          <div className="absolute bottom-[-20px] left-[15%] text-xs text-gray-600">1</div>
                          <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-600">2</div>
                          <div className="absolute bottom-[-20px] left-[65%] text-xs text-gray-600">3</div>
                          
                          {/* Y-axis labels */}
                          <div className="absolute bottom-0 left-[-15px] text-xs text-gray-600">0%</div>
                          <div className="absolute bottom-[32.5%] left-[-15px] text-xs text-gray-600">32.5%</div>
                          <div className="absolute bottom-[65%] left-[-15px] text-xs text-gray-600">65%</div>
                        </div>
                        <div className="text-xs text-center text-gray-500 mt-5">Number of Actions</div>
                      </div>
                      
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="text-xs font-medium text-center text-gray-600 mb-2">Gemini Pro</div>
                        <div className="h-32 relative">
                          {/* Bar chart for Gemini */}
                          <div className="absolute bottom-0 left-[15%] w-[15%] bg-amber-500 h-[45%]"></div>
                          <div className="absolute bottom-0 left-[40%] w-[15%] bg-amber-500 h-[55%]"></div>
                          <div className="absolute bottom-0 left-[65%] w-[15%] bg-amber-500 h-[0%]"></div>
                          
                          {/* X-axis labels */}
                          <div className="absolute bottom-[-20px] left-[15%] text-xs text-gray-600">1</div>
                          <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-600">2</div>
                          <div className="absolute bottom-[-20px] left-[65%] text-xs text-gray-600">3</div>
                          
                          {/* Y-axis labels */}
                          <div className="absolute bottom-0 left-[-15px] text-xs text-gray-600">0%</div>
                          <div className="absolute bottom-[27.5%] left-[-15px] text-xs text-gray-600">27.5%</div>
                          <div className="absolute bottom-[55%] left-[-15px] text-xs text-gray-600">55%</div>
                        </div>
                        <div className="text-xs text-center text-gray-500 mt-5">Number of Actions</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-indigo-600 mt-0.5">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                          aria-hidden="true"
                          role="img"
                        >
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-xs text-gray-700">
                        This systematic difference appears consistent across all models, suggesting a <span className="font-medium">fundamental behavior</span> of LLMs in tutoring contexts rather than model-specific quirks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="text-xs text-gray-500 italic">
                  Based on analysis of CIMA dataset and LLM-generated tutoring responses
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Interaction Flows",
        content: (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">Interaction Flows</h2>
              <p className="text-purple-100 text-lg">Response Patterns in Tutoring Dialogues</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">Key Interaction Patterns</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Human tutors show <span className="font-medium">focused teaching strategies</span> with clear mappings between student actions and responses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">AI tutors maintain <span className="font-medium">some basic alignment</span> with human strategies but show less distinct action-response mappings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Each AI model exhibits <span className="font-medium">distinct systematic patterns</span> that differ from both human tutors and other models</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">These reflect <span className="font-medium">genuine variations in teaching strategy</span>, not differences in situations being handled</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <div className="px-3 py-2 bg-blue-50 border-b border-blue-200 flex justify-between items-center">
                      <h4 className="font-semibold text-blue-800">Human Tutor Response Strategies</h4>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-5">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Student Guesses →</div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded">Hints (60%)</span>
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded">Corrections (30%)</span>
                          </div>
                        </div>
                        <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="absolute inset-y-0 left-0 bg-blue-500 rounded-l-full" 
                            style={{ width: '60%' }}
                            aria-label="Hints percentage: 60%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[60%] bg-blue-300" 
                            style={{ width: '30%' }}
                            aria-label="Corrections percentage: 30%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[90%] bg-blue-200" 
                            style={{ width: '10%' }}
                            aria-label="Other responses percentage: 10%"
                            role="img"
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 italic ml-2">
                          Focused strategy: guide toward correct answer or address misconceptions
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Student Questions →</div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded">Hints (76%)</span>
                          </div>
                        </div>
                        <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="absolute inset-y-0 left-0 bg-blue-500 rounded-l-full" 
                            style={{ width: '76%' }}
                            aria-label="Hints percentage: 76%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[76%] bg-blue-300" 
                            style={{ width: '14%' }}
                            aria-label="Questions percentage: 14%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[90%] bg-blue-200" 
                            style={{ width: '10%' }}
                            aria-label="Other responses percentage: 10%"
                            role="img"
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 italic ml-2">
                          Preference for scaffolded guidance over direct answers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                    <h4 className="font-medium text-purple-800 mb-2">Model-Specific Response Patterns</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      While maintaining some basic alignment with human strategies, each AI model shows characteristic response patterns:
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h5 className="text-sm font-medium text-purple-900 mb-1 flex items-center">
                          <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                          LLaMA 3.1
                        </h5>
                        <p className="text-xs text-gray-600">
                          Uses corrections more uniformly across different student actions; less responsive to specific action types
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h5 className="text-sm font-medium text-purple-900 mb-1 flex items-center">
                          <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                          GPT-4o
                        </h5>
                        <p className="text-xs text-gray-600">
                          Stronger tendency to respond to questions with hints but maintains more varied responses to guesses
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h5 className="text-sm font-medium text-purple-900 mb-1 flex items-center">
                          <span className="w-3 h-3 bg-indigo-400 rounded-full mr-2"></span>
                          Gemini Pro 1.5
                        </h5>
                        <p className="text-xs text-gray-600">
                          Similar to GPT-4o for questions but with more distributed pattern of corrections to different action types
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <div className="px-3 py-2 bg-purple-50 border-b border-purple-200 flex justify-between items-center">
                      <h4 className="font-semibold text-purple-800">AI Tutor Response Distribution</h4>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-5">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Student Guesses →</div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded">Hints (40%)</span>
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded">Corrections (40%)</span>
                          </div>
                        </div>
                        <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="absolute inset-y-0 left-0 bg-purple-500 rounded-l-full" 
                            style={{ width: '40%' }}
                            aria-label="Hints percentage: 40%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[40%] bg-purple-400" 
                            style={{ width: '40%' }}
                            aria-label="Corrections percentage: 40%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[80%] bg-purple-300" 
                            style={{ width: '20%' }}
                            aria-label="Other responses percentage: 20%"
                            role="img"
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 italic ml-2">
                          Less distinct mappings, more balanced distribution of response types
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm font-medium text-gray-700">Student Questions →</div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded">Hints/Explanations (83%)</span>
                          </div>
                        </div>
                        <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="absolute inset-y-0 left-0 bg-purple-500 rounded-l-full" 
                            style={{ width: '83%' }}
                            aria-label="Hints percentage: 83%"
                            role="img"
                          ></div>
                          <div 
                            className="absolute inset-y-0 left-[83%] bg-purple-300" 
                            style={{ width: '17%' }}
                            aria-label="Other responses percentage: 17%"
                            role="img"
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-gray-500 italic ml-2">
                          Similar to humans for questions, but with more elaborate explanations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-medium">Key insight:</span> While language models can engage in fluid, natural conversation, they exhibit characteristic response patterns distinct from human teaching strategies. These differences raise important questions about whether such variations reflect meaningful pedagogical choices or are artifacts of the models' underlying architectures and training approaches.
                </p>
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="text-xs text-gray-500 italic">
                  Based on analysis of CIMA dataset and LLM-generated tutoring responses
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
            Results - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-purple-600 text-white' 
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
              : 'bg-purple-600 text-white hover:bg-purple-700'
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
                currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
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
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultsSlideTemplate;