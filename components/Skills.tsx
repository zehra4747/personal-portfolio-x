'use client';
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false); // Reset animation when out of view
        }
      },
      { threshold: 0.5 } // Adjust as needed (0.5 means 50% of the section is visible)
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="skills" ref={skillsRef} className="p-4 mt-20">
      <h1 className="text-center text-[40px] font-semibold mt-15">MY SKILLS</h1>
      <p className="text-center mt-3">Technical skills</p>

      <div className="p-4 max-w-screen-lg mx-auto">

        {/* HTML Skill */}
        <div className="skills-bar flex flex-col mt-12 rounded-md">
          <p className="mb-2">HTML</p> 
          <div className="flex justify-between items-center">
            <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
              <div 
                className={`bg-[#fb5607] h-full ${isAnimated ? 'skill-bar-html' : ''}`}
              ></div>
            </div>
            <p className="ml-2">80%</p>
          </div>
        </div>

        {/* CSS Skill */}
        <div className="skills-bar flex flex-col mt-12 rounded-md">
          <p className="mb-2">CSS</p> 
          <div className="flex justify-between items-center">
            <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
              <div 
                className={`bg-[#fb5607] h-full ${isAnimated ? 'skill-bar-css' : ''}`}
              ></div>
            </div>
            <p className="ml-2">75%</p>
          </div>
        </div>

        {/* JavaScript Skill */}
        <div className="skills-bar flex flex-col mt-12 rounded-md">
          <p className="mb-2">JAVASCRIPT</p>  
          <div className="flex justify-between items-center">
            <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
              <div 
                className={`bg-[#fb5607] h-full ${isAnimated ? 'skill-bar-js' : ''}`}
              ></div>
            </div>
            <p className="ml-2">75%</p>
          </div>
        </div>

        {/* Figma Skill */}
        <div className="skills-bar flex flex-col mt-12 rounded-md">
          <p className="mb-2">FIGMA</p>
          <div className="flex justify-between items-center">
            <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
              <div 
                className={`bg-[#fb5607] h-full ${isAnimated ? 'skill-bar-figma' : ''}`}
              ></div>
            </div>
            <p className="ml-2">70%</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Skills;
