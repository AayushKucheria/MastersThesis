"use client";

import { useState, useEffect } from 'react';

// Define the props interface for the component
interface ResultsSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ResultsSlideTemplate = ({ currentSubsection = 'distribution', updateCurrentSubsection }: ResultsSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = {
    'distribution': 0,
    'complexity': 1,
    'flows': 2,
    'model-styles': 3
  };
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = {
    0: 'distribution',
    1: 'complexity',
    2: 'flows',
    3: 'model-styles'
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
        title: "Action Distribution",
        content: (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">Action Distribution</h2>
              <p className="text-purple-100 text-lg">Patterns in tutoring actions</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Key Findings</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-medium text-purple-800 mb-2">Human vs. LLM Action Preference</h4>
                      <p className="text-gray-700">
                        LLMs show consistent biases toward certain action types compared to human tutors, particularly favoring explicit explanation and guided problem-solving.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-medium text-purple-800 mb-2">Action Diversity</h4>
                      <p className="text-gray-700">
                        Human tutors demonstrate greater variability in action selection, while LLMs exhibit more predictable, template-like patterns within each model.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-medium text-purple-800 mb-2">Contextual Adaptation</h4>
                      <p className="text-gray-700">
                        Human tutors show higher sensitivity to student needs in action selection, shifting strategies more fluidly than LLMs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-800">Action Distribution Comparison</h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Explanation</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-600" style={{ width: '65%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">65%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">LLMs</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Explanation</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '42%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">42%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">Humans</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Scaffolding</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-600" style={{ width: '23%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">23%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">LLMs</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Scaffolding</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '31%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">31%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">Humans</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Feedback</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-600" style={{ width: '42%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">42%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">LLMs</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">Feedback</div>
                          <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '38%' }}></div>
                          </div>
                          <div className="ml-2 w-10 text-sm text-gray-600">38%</div>
                          <div className="ml-2 w-16 text-xs text-gray-500">Humans</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Note:</span> Values are approximate representations based on analysis of the CIMA dataset and LLM-generated tutoring responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-medium">Implications:</span> The systematic differences in action distribution between human and AI tutors suggest that even with their fluid interfaces, LLMs exhibit fixed patterns in their tutoring approaches that differ fundamentally from human teaching strategies.
                </p>
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
              <p className="text-purple-100 text-lg">Analyzing tutoring response structures</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Structural Patterns</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">Response Length</h4>
                      <p className="text-gray-700">
                        LLM tutors consistently produce longer responses than human tutors, with an average of 137 words compared to 78 words for humans.
                      </p>
                      <div className="mt-3 flex items-center space-x-1">
                        <div className="h-4 w-20 bg-blue-500 rounded-l"></div>
                        <div className="h-4 w-36 bg-purple-600 rounded-r"></div>
                      </div>
                      <div className="mt-1 flex text-xs">
                        <div className="w-20 text-blue-700">Humans</div>
                        <div className="w-36 text-purple-700">LLMs</div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">Multi-Part Structures</h4>
                      <p className="text-gray-700">
                        LLM responses typically contain more distinct components (greeting, explanation, example, question, encouragement) than human responses.
                      </p>
                      
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <div className="w-16 text-sm text-gray-600">Humans:</div>
                          <div className="flex space-x-1">
                            <div className="h-6 w-10 bg-blue-300 rounded"></div>
                            <div className="h-6 w-20 bg-blue-500 rounded"></div>
                            <div className="h-6 w-8 bg-blue-300 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-16 text-sm text-gray-600">LLMs:</div>
                          <div className="flex space-x-1">
                            <div className="h-6 w-8 bg-purple-300 rounded"></div>
                            <div className="h-6 w-24 bg-purple-600 rounded"></div>
                            <div className="h-6 w-16 bg-purple-500 rounded"></div>
                            <div className="h-6 w-12 bg-purple-400 rounded"></div>
                            <div className="h-6 w-8 bg-purple-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Content Characteristics</h3>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Feature
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Human Tutors
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            LLM Tutors
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Linguistic complexity
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Moderate
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Higher
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Examples provided
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            1-2 typically
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            2-4 typically
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Questions posed
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            More focused
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            More numerous
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Social elements
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Variable
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Consistently present
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Metacognitive cues
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Frequent
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            Less frequent
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Template Structure in LLMs</h4>
                    <p className="text-sm text-gray-700">
                      Analysis revealed consistent patterns in how LLMs structure their responses:
                    </p>
                    <ol className="mt-2 ml-5 list-decimal text-sm text-gray-700 space-y-1">
                      <li>Validation/acknowledgment of student input</li>
                      <li>Explanation of concept or rule</li>
                      <li>Examples demonstrating application</li>
                      <li>Follow-up question or practice opportunity</li>
                      <li>Encouragement or social closing</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-medium">Key insight:</span> The analysis shows that while LLMs offer more comprehensive responses, they follow predictable structural patterns that differ from the more variable and contextually adaptive structures used by human tutors.
                </p>
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
              <p className="text-purple-100 text-lg">Sequential patterns in tutoring dialogues</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Interaction Transitions</h3>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-800">Response Patterns Following Student Actions</h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-gray-700 mb-2">After Student Questions:</p>
                          <div className="flex space-x-1 items-center">
                            <div className="w-20 h-6 bg-blue-500 rounded-l flex items-center justify-center text-xs text-white">Humans</div>
                            <div className="flex-1 bg-gray-100 p-2 text-sm text-gray-700">
                              Direct answer (76%) → Elaboration (14%) → Counter-question (10%)
                            </div>
                          </div>
                          <div className="mt-2 flex space-x-1 items-center">
                            <div className="w-20 h-6 bg-purple-600 rounded-l flex items-center justify-center text-xs text-white">LLMs</div>
                            <div className="flex-1 bg-gray-100 p-2 text-sm text-gray-700">
                              Elaborate answer (83%) → Example (12%) → Counter-question (5%)
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-700 mb-2">After Student Errors:</p>
                          <div className="flex space-x-1 items-center">
                            <div className="w-20 h-6 bg-blue-500 rounded-l flex items-center justify-center text-xs text-white">Humans</div>
                            <div className="flex-1 bg-gray-100 p-2 text-sm text-gray-700">
                              Scaffold (52%) → Correct (28%) → Ask for clarification (20%)
                            </div>
                          </div>
                          <div className="mt-2 flex space-x-1 items-center">
                            <div className="w-20 h-6 bg-purple-600 rounded-l flex items-center justify-center text-xs text-white">LLMs</div>
                            <div className="flex-1 bg-gray-100 p-2 text-sm text-gray-700">
                              Correct with explanation (68%) → Scaffold (27%) → Ask for reflection (5%)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Key Transition Differences</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Human tutors more frequently use consecutive scaffolding moves</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>LLMs more often follow questions with comprehensive explanations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Human tutors show more variation in response to similar contexts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>LLMs demonstrate stronger tendencies toward fixed response sequences</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Flow Visualization</h3>
                  
                  <div className="bg-white p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-center mb-4">
                      <div className="space-x-4 flex">
                        <div className="w-24 text-center">
                          <div className="h-12 w-12 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center mx-auto">
                            <span className="text-sm font-medium text-blue-700">S</span>
                          </div>
                          <p className="text-xs mt-1 text-gray-600">Student</p>
                        </div>
                        
                        <div className="w-24 text-center">
                          <div className="h-12 w-12 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center mx-auto">
                            <span className="text-sm font-medium text-purple-700">T</span>
                          </div>
                          <p className="text-xs mt-1 text-gray-600">Tutor</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-64 border border-gray-200 rounded p-2">
                      {/* Human flow visualization */}
                      <div className="absolute left-4 top-2">
                        <p className="text-xs font-medium text-blue-700">Human Tutoring Flow</p>
                      </div>
                      
                      {/* This would ideally be an SVG or Canvas element with actual flow visualization */}
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <svg width="240" height="160" viewBox="0 0 240 160">
                            {/* Student node */}
                            <circle cx="40" cy="40" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="40" y="45" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            {/* Tutor nodes */}
                            <circle cx="120" cy="40" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="120" y="45" textAnchor="middle" fontSize="12" fill="#9333EA">T1</text>
                            
                            <circle cx="200" cy="40" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="200" y="45" textAnchor="middle" fontSize="12" fill="#9333EA">T2</text>
                            
                            <circle cx="80" cy="100" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="80" y="105" textAnchor="middle" fontSize="12" fill="#9333EA">T3</text>
                            
                            <circle cx="160" cy="100" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="160" y="105" textAnchor="middle" fontSize="12" fill="#9333EA">T4</text>
                            
                            {/* Student nodes */}
                            <circle cx="40" cy="120" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="40" y="125" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            <circle cx="200" cy="120" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="200" y="125" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            {/* Arrows */}
                            <line x1="55" y1="40" x2="105" y2="40" stroke="#3B82F6" strokeWidth="2"/>
                            <polygon points="105,40 100,35 100,45" fill="#3B82F6"/>
                            
                            <line x1="135" y1="40" x2="185" y2="40" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="185,40 180,35 180,45" fill="#9333EA"/>
                            
                            <line x1="190" y1="50" x2="90" y2="90" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="90,90 95,85 97,95" fill="#9333EA"/>
                            
                            <line x1="95" y1="100" x2="145" y2="100" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="145,100 140,95 140,105" fill="#9333EA"/>
                            
                            <line x1="65" y1="100" x2="55" y2="112" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="55,112 55,105 62,111" fill="#9333EA"/>
                            
                            <line x1="175" y1="100" x2="185" y2="112" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="185,112 185,105 178,111" fill="#9333EA"/>
                          </svg>
                          <p className="text-xs text-gray-500 mt-2">Complex, branching interaction patterns</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-64 mt-4 border border-gray-200 rounded p-2">
                      {/* LLM flow visualization */}
                      <div className="absolute left-4 top-2">
                        <p className="text-xs font-medium text-purple-700">LLM Tutoring Flow</p>
                      </div>
                      
                      {/* This would ideally be an SVG or Canvas element with actual flow visualization */}
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <svg width="240" height="160" viewBox="0 0 240 160">
                            {/* Student node */}
                            <circle cx="40" cy="40" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="40" y="45" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            {/* Tutor nodes */}
                            <circle cx="120" cy="40" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="120" y="45" textAnchor="middle" fontSize="12" fill="#9333EA">T1</text>
                            
                            <circle cx="200" cy="40" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="200" y="45" textAnchor="middle" fontSize="12" fill="#9333EA">T2</text>
                            
                            <circle cx="120" cy="100" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="120" y="105" textAnchor="middle" fontSize="12" fill="#9333EA">T3</text>
                            
                            <circle cx="200" cy="100" r="15" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2"/>
                            <text x="200" y="105" textAnchor="middle" fontSize="12" fill="#9333EA">T4</text>
                            
                            {/* Student nodes */}
                            <circle cx="40" cy="100" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="40" y="105" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            <circle cx="120" cy="160" r="15" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
                            <text x="120" y="165" textAnchor="middle" fontSize="12" fill="#3B82F6">S</text>
                            
                            {/* Arrows */}
                            <line x1="55" y1="40" x2="105" y2="40" stroke="#3B82F6" strokeWidth="2"/>
                            <polygon points="105,40 100,35 100,45" fill="#3B82F6"/>
                            
                            <line x1="135" y1="40" x2="185" y2="40" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="185,40 180,35 180,45" fill="#9333EA"/>
                            
                            <line x1="200" y1="55" x2="200" y2="85" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="200,85 195,80 205,80" fill="#9333EA"/>
                            
                            <line x1="185" y1="100" x2="135" y2="100" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="135,100 140,95 140,105" fill="#9333EA"/>
                            
                            <line x1="105" y1="100" x2="55" y2="100" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="55,100 60,95 60,105" fill="#9333EA"/>
                            
                            <line x1="120" y1="115" x2="120" y2="145" stroke="#9333EA" strokeWidth="2"/>
                            <polygon points="120,145 115,140 125,140" fill="#9333EA"/>
                          </svg>
                          <p className="text-xs text-gray-500 mt-2">More linear, structured interaction patterns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-medium">Research insight:</span> The analysis of interaction flows reveals that while LLMs appear to offer fluid interfaces, they actually exhibit more predictable and less adaptable sequential patterns than human tutors. This suggests the emergence of fixed behavioral patterns despite the seeming flexibility of LLM interactions.
                </p>
              </div>
            </div>
          </div>
        )
      },
    {
      title: "Model-Specific Styles",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Model-Specific Styles</h2>
            <p className="text-purple-100 text-lg">Comparing tutoring approaches across models</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow overflow-hidden">
                <div className="bg-blue-600 px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">GPT-4o</h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Balanced approach</span> with high emphasis on detailed explanations
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Higher use of analogies</span> and real-world contexts
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">More personalized</span> language and response adaptation
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Strategic questioning</span> to guide student discovery
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-blue-200">
                    <div className="flex items-center">
                      <div className="w-24 text-xs font-medium text-gray-500">Explanation</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Scaffolding</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Feedback</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '44%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-lg shadow overflow-hidden">
                <div className="bg-emerald-600 px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">Gemini Pro 1.5</h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Visualization-focused</span> with strong emphasis on examples
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">More structured scaffolding</span> with step-by-step approaches
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Pattern-focused learning</span> with clear rule statements
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Less personalized</span> but highly consistent response structure
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-emerald-200">
                    <div className="flex items-center">
                      <div className="w-24 text-xs font-medium text-gray-500">Explanation</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: '58%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Scaffolding</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Feedback</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg shadow overflow-hidden">
                <div className="bg-amber-600 px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">LLaMA 3.1 405B</h3>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Heavy explanation focus</span> with comprehensive concept coverage
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">More direct feedback</span> with explicit correctness judgments
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Lower social presence</span> with fewer encouragement elements
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">
                        <span className="font-medium">Rule-oriented approach</span> with more formal linguistic style
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-amber-200">
                    <div className="flex items-center">
                      <div className="w-24 text-xs font-medium text-gray-500">Explanation</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Scaffolding</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: '18%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-24 text-xs font-medium text-gray-500">Feedback</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: '48%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Comparative Analysis</h3>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                        GPT-4o
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-emerald-500 uppercase tracking-wider">
                        Gemini Pro 1.5
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-amber-500 uppercase tracking-wider">
                        LLaMA 3.1 405B
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Response length
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        145 words avg.
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        132 words avg.
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        156 words avg.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Example usage
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Diverse, contextualized
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Visual, patterned
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Abundant, rule-oriented
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Social presence
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        High
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Medium
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Low
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Adaptability
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Higher
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Medium
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        Lower
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                <span className="font-medium">Research insight:</span> Despite training on similar data, each model exhibits distinctive "personalities" in tutoring. These fixed behavioral patterns suggest that even state-of-the-art LLMs develop consistent tutoring styles that differ from human approaches, creating a form of QWERTY phenomenon in AI tutoring where certain patterns become entrenched through statistical learning rather than deliberate design.
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