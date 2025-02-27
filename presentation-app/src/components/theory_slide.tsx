"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface TheorySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const TheorySlideTemplate = ({ currentSubsection = 'evolution', updateCurrentSubsection }: TheorySlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'evolution': 0,
    'qwerty': 1,
    'tools-to-mediums': 2,
    'llms-education': 3
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'evolution',
    1: 'qwerty',
    2: 'tools-to-mediums',
    3: 'llms-education'
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
      title: "Evolution of Tutoring Systems",
      content: (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Evolution of Tutoring Systems</h2>
            <p className="text-indigo-100 text-lg">Historical context and constraints</p>
          </div>
          
          <div className="p-6">
            {/* Timeline visualization */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-6 w-1 h-[420px] bg-indigo-200"></div>
              
              {/* Timeline entries */}
              <div className="space-y-10">
                {/* 1970s Entry */}
                <div className="flex">
                  <div className="w-32 pt-1 text-right pr-4 font-bold text-indigo-800">1970s</div>
                  <div className="relative">
                    {/* Circle marker */}
                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
                    {/* Content */}
                    <div className="pl-8">
                      <h3 className="text-lg font-medium text-indigo-800">Early Systems</h3>
                      <div className="mt-2 bg-indigo-50 p-4 rounded-lg max-w-2xl">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="bg-indigo-100 rounded-full p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">SCHOLAR (Carbonell, 1970)</span> — First system with knowledge representation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 1980s Entry */}
                <div className="flex">
                  <div className="w-32 pt-1 text-right pr-4 font-bold text-indigo-800">1980s</div>
                  <div className="relative">
                    {/* Circle marker */}
                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
                    {/* Content */}
                    <div className="pl-8">
                      <h3 className="text-lg font-medium text-indigo-800">Knowledge-Based Systems</h3>
                      <div className="mt-2 bg-indigo-50 p-4 rounded-lg max-w-2xl">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="bg-indigo-100 rounded-full p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">GUIDON (Clancey, 1987)</span> — Rule-based expert systems with explicit knowledge encoding</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 1990s - 2000s Entry */}
                <div className="flex">
                  <div className="w-32 pt-1 text-right pr-4 font-bold text-indigo-800">1990s - 2000s</div>
                  <div className="relative">
                    {/* Circle marker */}
                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
                    {/* Content */}
                    <div className="pl-8">
                      <h3 className="text-lg font-medium text-indigo-800">Natural Dialog</h3>
                      <div className="mt-2 bg-indigo-50 p-4 rounded-lg max-w-2xl">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="bg-indigo-100 rounded-full p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">AutoTutor (Graesser et al., 1999)</span> — First systems with natural language dialog capabilities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 2010s - Present Entry */}
                <div className="flex">
                  <div className="w-32 pt-1 text-right pr-4 font-bold text-indigo-800">2010s - Present</div>
                  <div className="relative">
                    {/* Circle marker */}
                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
                    {/* Content */}
                    <div className="pl-8">
                      <h3 className="text-lg font-medium text-indigo-800">Neural Systems</h3>
                      <div className="mt-2 bg-indigo-50 p-4 rounded-lg max-w-2xl">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="bg-indigo-100 rounded-full p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-800"><span className="font-medium">Shift from rule-based to statistical and neural approaches with less defined knowledge spaces</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Constraints Box */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Technical Constraints</h3>
                <p className="text-sm text-gray-600 italic mb-3">Limitations due to technology rather than pedagogy</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Limited natural language understanding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Rigid knowledge representation formats</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Need for pre-programmed interaction paths</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-lg font-medium text-indigo-800 mb-3">Pedagogical Constraints</h3>
                <p className="text-sm text-gray-600 italic mb-3">Deliberate structures that enhance learning</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Scaffolding strategies for progressive learning</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Guided discovery to promote deeper understanding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Structured problem sequencing for optimal challenge</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Insight Box */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <p className="text-gray-800 font-medium">Key research question:</p>
                <p className="text-gray-800">Which constraints in LLM tutoring reflect deliberate pedagogical choices versus those that are artifacts of their technical architecture?</p>
                <p className="text-sm text-gray-600 italic mt-1">"Understanding this distinction is crucial for evaluating LLM-based tutoring systems" — Thesis p.17</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The QWERTY Phenomenon",
      content: (
        <div className="bg-white font-sans">
          {/* Main Title */}
          <div className="bg-indigo-700 text-white p-4">
            <h1 className="text-2xl font-bold">The QWERTY Phenomenon</h1>
            <p className="text-indigo-100">Historical constraints persisting beyond their necessity</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-xl text-indigo-800 font-semibold mb-4">The Concept</h2>
              
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-200 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800">
                      <span className="font-medium">Design constraints persist</span> even after technical limitations are resolved
                    </p>
                    <p className="text-sm text-gray-500 mt-1">— Seymour Papert (1980)</p>
                  </div>
                </div>
              </div>
              
              {/* Original QWERTY Example with Keyboard Visualization */}
              <div className="mb-4">
                <h3 className="text-lg text-indigo-700 font-medium mb-2">Original Example</h3>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-center mb-2">
                    {/* Simplified keyboard visualization - horizontal layout */}
                    <div className="flex gap-1">
                      {'QWERTYUIOP'.split('').map(key => (
                        <div key={key} className="w-8 h-8 bg-white rounded shadow flex items-center justify-center font-medium">{key}</div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Designed to prevent typewriter jams — persists despite obsolete constraint
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <h2 className="text-xl text-indigo-800 font-semibold mb-4">In Educational Technology</h2>
              
              {/* The three layers as cards with icons */}
              <div className="space-y-4">
                {/* Conceptual Layer */}
                <div className="bg-indigo-50 p-4 rounded-lg flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-indigo-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-800">Conceptual Layer</h3>
                    <p className="text-sm text-gray-700">Fixed "domains of knowledge" despite LLMs' ability to fluidly traverse topics</p>
                  </div>
                </div>
                
                {/* Pedagogical Layer */}
                <div className="bg-indigo-50 p-4 rounded-lg flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-indigo-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-800">Pedagogical Layer</h3>
                    <p className="text-sm text-gray-700">Rigid step-by-step approaches persisting despite adaptive capabilities</p>
                  </div>
                </div>
                
                {/* Technical Layer */}
                <div className="bg-indigo-50 p-4 rounded-lg flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-indigo-100 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-800">Technical Layer</h3>
                    <p className="text-sm text-gray-700">Assessment formats restricted to multiple-choice despite natural language capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Research Question Connection */}
          <div className="mx-6 mb-6 p-4 bg-indigo-100 rounded-lg border-l-4 border-indigo-600">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-800">
                <span className="font-medium">Research question:</span> Do LLMs exhibit QWERTY-like patterns—fixed behaviors beneath fluid interaction?
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
            {/* Visual comparison between paradigms */}
            <div className="flex mb-8">
              {/* Tool Paradigm Side */}
              <div className="flex-1 bg-gray-100 rounded-l-lg p-5 relative">
                <div className="absolute -top-3 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tool Paradigm</div>
                <div className="mt-4 flex justify-center mb-6">
                  <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Student as passive recipient</p>
                  </li>
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Delivery of structured information</p>
                  </li>
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Focus on knowledge transmission</p>
                  </li>
                </ul>
                
                <div className="mt-4 text-sm text-gray-500 italic text-center px-4">
                  Dominated educational technology from 1970s-1990s
                </div>
              </div>
              
              {/* Transition arrow */}
              <div className="flex items-center justify-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              {/* Medium Paradigm Side */}
              <div className="flex-1 bg-gray-100 rounded-r-lg p-5 relative">
                <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Medium Paradigm</div>
                <div className="mt-4 flex justify-center mb-6">
                  <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Student as active constructor</p>
                  </li>
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Environment for exploration</p>
                  </li>
                  <li className="flex items-start bg-white p-2 rounded shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Focus on personalized experiences</p>
                  </li>
                </ul>
                
                <div className="mt-4 text-sm text-gray-500 italic text-center px-4">
                  Emerged with constructivist approaches
                </div>
              </div>
            </div>
            
            {/* Theoretical underpinnings */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              {/* Piaget Box */}
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="mr-3 flex-shrink-0 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-800">Constructivist Learning Theory</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Knowledge is not transmitted but constructed by the learner building on existing mental models
                    </p>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      — Jean Piaget
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Papert Box */}
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="mr-3 flex-shrink-0 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-800">Constructionism</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      "The role of the teacher is to create the conditions for invention rather than provide ready-made knowledge"
                    </p>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      — Seymour Papert
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Research Relevance */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-800">
                  <span className="font-medium">Research question:</span> Do LLMs, with their fluid interfaces, support the "medium paradigm" by enabling personalized, constructivist learning, or do they maintain fixed patterns that limit this potential?
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
            {/* Capabilities - Visual Cards */}
            <div className="mb-8">
              <h2 className="text-xl text-indigo-800 font-semibold mb-4">Capabilities</h2>
              
              <div className="grid grid-cols-4 gap-4">
                {/* Natural Interaction */}
                <div className="bg-indigo-50 rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">Natural Interaction</h3>
                  <p className="text-xs text-gray-600">Conversational learning without templates</p>
                </div>
                
                {/* Contextual Adaptation */}
                <div className="bg-indigo-50 rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">Contextual Adaptation</h3>
                  <p className="text-xs text-gray-600">Adjusts to student comprehension</p>
                </div>
                
                {/* Knowledge Integration */}
                <div className="bg-indigo-50 rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">Knowledge Integration</h3>
                  <p className="text-xs text-gray-600">Crosses domain boundaries</p>
                </div>
                
                {/* Example Generation */}
                <div className="bg-indigo-50 rounded-lg shadow-sm p-3 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">Example Generation</h3>
                  <p className="text-xs text-gray-600">Creates tailored practice problems</p>
                </div>
              </div>
            </div>
            
            {/* Central Tension Visualization */}
            <div className="mb-8">
              <h2 className="text-xl text-indigo-800 font-semibold mb-4">Key Tension</h2>
              
              <div className="relative h-44 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-4">
                {/* Left side - Fluid */}
                <div className="absolute left-8 top-4 w-40 text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blue-800">Fluid Interface</h3>
                  <p className="text-xs text-gray-600">Natural, adaptive interactions</p>
                </div>
                
                {/* Right side - Fixed */}
                <div className="absolute right-8 top-4 w-40 text-center">
                  <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-red-800">Fixed Patterns</h3>
                  <p className="text-xs text-gray-600">Underlying structured behaviors</p>
                </div>
                
                {/* Central tension */}
                <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-64 text-center">
                  <div className="bg-white px-4 py-2 rounded-md shadow-md border-2 border-indigo-300">
                    <h4 className="font-medium text-indigo-800">Research Question</h4>
                    <p className="text-sm text-gray-700">Do fluid interfaces mask fixed behavioral patterns?</p>
                  </div>
                  
                  {/* Arrows */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto -mt-1 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Limitations - Visual Display */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm border-l-4 border-gray-400 flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="font-medium text-gray-800 mb-1">Training Data Biases</h3>
                <p className="text-xs text-gray-600">May reflect suboptimal teaching</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm border-l-4 border-gray-400 flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-medium text-gray-800 mb-1">Research Gap</h3>
                <p className="text-xs text-gray-600">Limited studies on LLM teaching patterns</p>
              </div>
            </div>
            
            {/* Central Thesis - Visual Focus */}
            <div className="p-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                Research Hypothesis
              </div>
              <div className="pt-2 flex justify-center">
                <div className="w-3/4 text-center">
                  <p className="text-indigo-900 font-medium">
                    Despite LLMs' fluid interfaces, this research hypothesizes that their tutoring behaviors exhibit fixed patterns—a new form of the QWERTY phenomenon
                  </p>
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