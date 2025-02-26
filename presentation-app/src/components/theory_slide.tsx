"use client";

import { useState, useEffect } from 'react';

// Define the props interface for the component
interface TheorySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const TheorySlideTemplate = ({ currentSubsection = 'evolution', updateCurrentSubsection }: TheorySlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = {
    'evolution': 0,
    'qwerty': 1,
    'tools-to-mediums': 2,
    'llms-education': 3
  };
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = {
    0: 'evolution',
    1: 'qwerty',
    2: 'tools-to-mediums',
    3: 'llms-education'
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
      title: "Evolution of Tutoring Systems",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Evolution of Tutoring Systems</h2>
            <p className="text-indigo-100 text-lg">Historical context and constraints</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Historical Progression</h3>
                <ul className="space-y-3">
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">1970s: Early Systems</div>
                    <p className="text-sm mt-1">Carbonell's SCHOLAR (1970) - First computer-assisted instruction system with knowledge representation</p>
                    <p className="text-xs text-gray-500 italic mt-1">Citation: Carbonell, J. R. (1970). AI in CAI: An artificial intelligence approach to computer-assisted instruction.</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">1980s: Knowledge-Based Systems</div>
                    <p className="text-sm mt-1">GUIDON (Clancey, 1987) - Rule-based expert systems with explicit knowledge encoding</p>
                    <p className="text-xs text-gray-500 italic mt-1">Citation: Clancey, W. J. (1987). Knowledge-based tutoring: The GUIDON program.</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">1990s - 2000s: Natural Dialog</div>
                    <p className="text-sm mt-1">AutoTutor (Graesser et al., 1999) - First systems with natural language dialog capabilities</p>
                    <p className="text-xs text-gray-500 italic mt-1">Citation: Graesser, A. C., Wiemer-Hastings, K., Wiemer-Hastings, P., & Kreuz, R. (1999). AutoTutor: A simulation of a human tutor.</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">2010s - Present: Neural Systems</div>
                    <p className="text-sm mt-1">Shift from rule-based to statistical and neural approaches with less defined knowledge spaces</p>
                    <p className="text-xs text-gray-500 italic mt-1">Citation: Roll, I., & Wylie, R. (2016). Evolution and revolution in artificial intelligence in education.</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Types of Constraints</h3>
                <div className="mb-4 bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">Group 1: Technical Constraints</h4>
                  <p className="text-sm text-gray-700">Limitations due to technological capabilities rather than pedagogical choices</p>
                  <ul className="mt-2 text-sm space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Limited natural language processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Restricted knowledge representations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Narrow domain specificity</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">Group 2: Pedagogical Constraints</h4>
                  <p className="text-sm text-gray-700">Deliberate structures that enhance learning effectiveness</p>
                  <ul className="mt-2 text-sm space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Scaffolding strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Guided discovery approaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Problem sequencing and difficulty progression</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-700 font-bold">!</span>
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Key insight:</span> As technology evolved, certain constraints were removed while others persisted due to educational design choices. Understanding this distinction is crucial for evaluating LLM-based tutoring systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The QWERTY Phenomenon",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">The QWERTY Phenomenon</h2>
            <p className="text-indigo-100 text-lg">Path dependency in educational technology</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">Conceptual Framework</h3>
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800">
                    The QWERTY phenomenon refers to the persistence of design constraints even after the original technical limitations have been resolved.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Term coined by Seymour Papert (1980) at MIT Media Lab in his seminal work "Mindstorms: Children, Computers, and Powerful Ideas."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">The Original QWERTY Example</h4>
                  <p className="text-sm text-gray-700">
                    The QWERTY keyboard layout was designed to slow typists down and prevent mechanical typewriter jams. Despite the elimination of this technical constraint with digital keyboards, the inefficient layout persists as the standard.
                  </p>
                  <div className="mt-3 text-xs text-gray-500 italic">
                    Citation: David, P. A. (1985). Clio and the Economics of QWERTY. American Economic Review, 75(2), 332-337.
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">QWERTY in Educational Technology</h3>
                <ul className="space-y-3">
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Conceptual Layer</div>
                    <p className="text-sm mt-1">Educational software maintaining fixed "domains of knowledge" despite LLMs' ability to fluidly traverse knowledge areas</p>
                    <div className="mt-2 text-xs bg-indigo-50 p-2 rounded">
                      Example: Math tutors that strictly separate algebra and geometry despite their interconnections
                    </div>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Pedagogical Layer</div>
                    <p className="text-sm mt-1">Rigid step-by-step problem-solving approaches persisting despite capabilities for more adaptive guidance</p>
                    <div className="mt-2 text-xs bg-indigo-50 p-2 rounded">
                      Example: Forcing linear progression through material when non-linear exploration might be more effective
                    </div>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Technical Layer</div>
                    <p className="text-sm mt-1">Interface designs that maintain rigid interaction patterns from previous technologies</p>
                    <div className="mt-2 text-xs bg-indigo-50 p-2 rounded">
                      Example: Multiple-choice assessment formats persisting despite capabilities for natural language understanding
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium text-indigo-700">Research question implication:</span> Are there QWERTY-like patterns in LLM tutoring systems - constraints that persist despite the newfound capabilities for fluid, natural interaction? This study investigates whether LLMs exhibit fixed patterns beneath their apparent flexibility.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Shift from Tools to Mediums",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Shift from Tools to Mediums</h2>
            <p className="text-indigo-100 text-lg">Evolving conceptualizations of educational technology</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">Conceptual Evolution</h3>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-700 mb-2">Tool Paradigm</h4>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Student as passive recipient of knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Technology designed to deliver information efficiently</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Focus on knowledge transmission</span>
                      </li>
                    </ul>
                    <div className="mt-2 text-xs text-gray-500 italic">
                      Dominated educational technology from 1970s-1990s, exemplified by Computer-Aided Instruction (CAI) systems
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-700 mb-2">Medium Paradigm</h4>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Student as active constructor of knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Technology as environment for exploration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Focus on personalized learning experiences</span>
                      </li>
                    </ul>
                    <div className="mt-2 text-xs text-gray-500 italic">
                      Emerged with constructionist learning approaches, championed by Papert (1980) and others
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">Theoretical Underpinnings</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-indigo-700 mb-2">Constructivist Learning Theory</h4>
                  <p className="text-sm text-gray-700">
                    Piaget's concept of genetic epistemology: learning as an active process of knowledge construction that builds on existing mental models. Knowledge is not transmitted but constructed by the learner.
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">
                    Citation: Piaget, J. (1952). The origins of intelligence in children.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">Constructionism</h4>
                  <p className="text-sm text-gray-700">
                    Papert extended constructivism by emphasizing learning through making. Educational technology should provide a medium for construction rather than a tool for instruction.
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">
                    Citation: Papert, S., & Harel, I. (1991). Situating constructionism.
                  </p>
                  
                  <div className="mt-3 bg-indigo-50 p-2 rounded">
                    <p className="text-sm italic">
                      "The role of the teacher is to create the conditions for invention rather than provide ready-made knowledge." — Seymour Papert
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
                <p className="ml-2 text-gray-800">
                  <span className="font-medium">Relevance to LLM tutoring:</span> This research examines whether LLMs, with their fluid interfaces, better support the "medium paradigm" by allowing learners to explore knowledge in more personalized, constructivist ways, or if they maintain fixed patterns that limit this potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "LLMs as Educational Interfaces",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">LLMs as Educational Interfaces</h2>
            <p className="text-indigo-100 text-lg">Capabilities, limitations, and tensions</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Capabilities</h3>
                <ul className="space-y-3">
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Natural Interaction</div>
                    <p className="text-sm mt-1">Unprecedented ability to engage in conversational learning without predefined response templates</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Contextual Adaptation</div>
                    <p className="text-sm mt-1">Can dynamically adjust explanations based on student vocabulary, prior statements, and apparent comprehension level</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Knowledge Integration</div>
                    <p className="text-sm mt-1">Can draw connections across domains and present information in integrated ways rather than strictly siloed topics</p>
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-indigo-700">Example Generation</div>
                    <p className="text-sm mt-1">Ability to generate novel examples and practice problems tailored to student interests or needs</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Tensions & Limitations</h3>
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-indigo-700 mb-2">Fluidity vs. Structure Tension</h4>
                  <p className="text-sm text-gray-700">
                    While LLMs appear fluid in their responses, they operate within the structural constraints of their training objectives and data distributions.
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">
                    Citation: Bommasani et al. (2021). On the Opportunities and Risks of Foundation Models.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-indigo-700 mb-2">Technical Limitations</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Lack of true understanding or reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Statistical patterns may not align with pedagogical best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      <span>Training data biases may reflect suboptimal teaching approaches</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">Research Gap</h4>
                  <p className="text-sm text-gray-700">
                    Limited research on the emergent teaching patterns and behaviors of LLMs in educational contexts, and how these compare to human tutoring approaches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">
                <span className="font-medium">Central thesis:</span> Despite the apparent flexibility of LLM interactions, this research hypothesizes that fixed patterns emerge in their tutoring behaviors that may represent a new form of the QWERTY phenomenon - constraints that arise not from deliberate design choices but from the statistical nature of language model training.
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
            Theoretical Foundations - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-indigo-600 text-white' 
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
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
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
                currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'
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
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TheorySlideTemplate;