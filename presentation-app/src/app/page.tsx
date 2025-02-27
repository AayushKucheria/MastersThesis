"use client";

import { useState, useEffect } from 'react';
import TitleSlideTemplate from "@/components/title_slide";
import IntroductionSlideTemplate from "@/components/introduction_slide";
import TheorySlideTemplate from "@/components/theory_slide";
import MethodologySlideTemplate from "@/components/methodology_slide";
import ResultsSlideTemplate from "@/components/results";
import DiscussionSlideTemplate from "@/components/discussion_slide";
import ConclusionSlideTemplate from "@/components/conclusion_slide";

// Define the structure of our presentation with sections and subsections
const presentationStructure = {
  title: { subsections: ['main'] },
  introduction: { subsections: ['focus', 'questions', 'roadmap'] },
  theory: { subsections: ['evolution', 'qwerty', 'tools-to-mediums', 'llms-education'] },
  methodology: { subsections: ['dataset', 'implementation', 'framework'] },
  results: { subsections: ['distribution', 'complexity', 'flows', 'model-styles'] },
  discussion: { subsections: ['theoretical', 'practical', 'limitations'] },
  conclusion: { subsections: ['findings', 'significance'] }
};

// Type for our slide sections
type SlideSection = keyof typeof presentationStructure;

export default function Home() {
  // Track both the current section and subsection
  const [activeSlide, setActiveSlide] = useState<SlideSection>('title');
  const [activeSubsection, setActiveSubsection] = useState<string>('main');
  
  // Define the slide order for navigation (main sections)
  const slideOrder: SlideSection[] = ['title', 'introduction', 'theory', 'methodology', 'results', 'discussion', 'conclusion'];
  
  // Function to navigate to the next slide or subsection
  const goToNextSlide = () => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    const currentSection = presentationStructure[activeSlide];
    const currentSubsectionIndex = currentSection.subsections.indexOf(activeSubsection);
    
    // If there are more subsections in the current section, go to the next subsection
    if (currentSubsectionIndex < currentSection.subsections.length - 1) {
      setActiveSubsection(currentSection.subsections[currentSubsectionIndex + 1]);
    } 
    // Otherwise, go to the next section (if available)
    else if (currentSectionIndex < slideOrder.length - 1) {
      const nextSection = slideOrder[currentSectionIndex + 1];
      setActiveSlide(nextSection);
      setActiveSubsection(presentationStructure[nextSection].subsections[0]);
    }
  };
  
  // Function to navigate to the previous slide or subsection
  const goToPreviousSlide = () => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    const currentSection = presentationStructure[activeSlide];
    const currentSubsectionIndex = currentSection.subsections.indexOf(activeSubsection);
    
    // If there are previous subsections in the current section, go to the previous subsection
    if (currentSubsectionIndex > 0) {
      setActiveSubsection(currentSection.subsections[currentSubsectionIndex - 1]);
    } 
    // Otherwise, go to the previous section (if available)
    else if (currentSectionIndex > 0) {
      const prevSection = slideOrder[currentSectionIndex - 1];
      setActiveSlide(prevSection);
      // Go to the last subsection of the previous section
      const prevSubsections = presentationStructure[prevSection].subsections;
      setActiveSubsection(prevSubsections[prevSubsections.length - 1]);
    }
  };
  
  // Function to directly navigate to a specific section
  const goToSection = (section: SlideSection) => {
    setActiveSlide(section);
    setActiveSubsection(presentationStructure[section].subsections[0]);
  };
  
  // Function to update just the subsection
  const updateSubsection = (subsection: string) => {
    // Only update if it's a valid subsection for the current section
    if (presentationStructure[activeSlide].subsections.includes(subsection)) {
      setActiveSubsection(subsection);
    }
  };
  
  // Calculate total slides and current slide number for progress indicator
  const getTotalSlideCount = () => {
    return Object.values(presentationStructure).reduce(
      (total, section) => total + section.subsections.length, 0
    );
  };
  
  const getCurrentSlideNumber = () => {
    let count = 0;
    for (let i = 0; i < slideOrder.indexOf(activeSlide); i++) {
      count += presentationStructure[slideOrder[i]].subsections.length;
    }
    count += presentationStructure[activeSlide].subsections.indexOf(activeSubsection) + 1;
    return count;
  };
  
  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, activeSubsection, goToNextSlide, goToPreviousSlide]); // Include all required dependencies
  
  // Check if we're at the first slide overall
  const isFirstSlide = activeSlide === slideOrder[0] && 
                       activeSubsection === presentationStructure[slideOrder[0]].subsections[0];
  
  // Check if we're at the last slide overall
  const isLastSlide = activeSlide === slideOrder[slideOrder.length - 1] && 
                      activeSubsection === presentationStructure[slideOrder[slideOrder.length - 1]].subsections[
                        presentationStructure[slideOrder[slideOrder.length - 1]].subsections.length - 1
                      ];
  
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-800">Thesis Presentation</h1>
        <p className="text-gray-600 mb-4">Fluid Interfaces and Fixed Patterns: Understanding LLM Behavior in Educational Contexts</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <button 
            onClick={() => goToSection('title')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'title' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Title
          </button>
          <button 
            onClick={() => goToSection('introduction')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'introduction' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Introduction
          </button>
          <button 
            onClick={() => goToSection('theory')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'theory' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Theoretical Foundations
          </button>
          <button 
            onClick={() => goToSection('methodology')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'methodology' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Methodology
          </button>
          <button 
            onClick={() => goToSection('results')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'results' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Results
          </button>
          <button 
            onClick={() => goToSection('discussion')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'discussion' 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Discussion
          </button>
          <button 
            onClick={() => goToSection('conclusion')} 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSlide === 'conclusion' 
                ? 'bg-amber-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Conclusion
          </button>
        </div>
      </header>
      
      <div className="container mx-auto">
        {activeSlide === 'title' ? (
          <TitleSlideTemplate />
        ) : activeSlide === 'introduction' ? (
          <IntroductionSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : activeSlide === 'theory' ? (
          <TheorySlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : activeSlide === 'methodology' ? (
          <MethodologySlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : activeSlide === 'results' ? (
          <ResultsSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection} 
          />
        ) : activeSlide === 'discussion' ? (
          <DiscussionSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        ) : (
          <ConclusionSlideTemplate 
            currentSubsection={activeSubsection}
            updateCurrentSubsection={updateSubsection}
          />
        )}
      </div>
      
      {/* Navigation controls with subsection information */}
      <div className="flex justify-between mt-8 max-w-4xl mx-auto px-4">
        <button 
          onClick={goToPreviousSlide}
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded-md ${
            isFirstSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ← Previous
        </button>
        
        <div className="text-sm text-gray-500 self-center flex flex-col items-center">
          <div className="mb-1">
            {getCurrentSlideNumber()} / {getTotalSlideCount()}
          </div>
          <div className="text-xs text-gray-400">
            {activeSlide} • {activeSubsection}
          </div>
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={isLastSlide}
          className={`px-4 py-2 rounded-md ${
            isLastSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
