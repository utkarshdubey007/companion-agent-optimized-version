import { useState, useEffect } from 'react';

export function useTypingEffect(sections, speed = 50, sectionDelay = 300) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [displayedSections, setDisplayedSections] = useState({});

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    let timeoutId;
    const currentSection = sections[currentSectionIndex];
    
    if (!currentSection) {
      setIsComplete(true);
      return;
    }

    const { text } = currentSection;
    
    if (currentText.length < text.length) {
      // Continue typing current section
      timeoutId = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, speed);
    } else {
      // Current section complete, store it and move to next after delay
      setDisplayedSections(prev => ({
        ...prev,
        [currentSectionIndex]: text
      }));
      
      if (currentSectionIndex < sections.length - 1) {
        timeoutId = setTimeout(() => {
          setCurrentSectionIndex(prev => prev + 1);
          setCurrentText('');
        }, sectionDelay);
      } else {
        setIsComplete(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [sections, currentSectionIndex, currentText, speed, sectionDelay]);

  const getDisplayText = (sectionIndex) => {
    if (sectionIndex < currentSectionIndex) {
      // Previous sections - show complete
      return displayedSections[sectionIndex] || '';
    } else if (sectionIndex === currentSectionIndex) {
      // Current section - show typing progress
      return currentText;
    } else {
      // Future sections - show nothing
      return '';
    }
  };

  const isSectionVisible = (sectionIndex) => {
    return sectionIndex <= currentSectionIndex;
  };

  const isSectionComplete = (sectionIndex) => {
    return sectionIndex < currentSectionIndex || (sectionIndex === currentSectionIndex && isComplete);
  };

  return {
    getDisplayText,
    isSectionVisible,
    isSectionComplete,
    isComplete,
    currentSectionIndex
  };
}
