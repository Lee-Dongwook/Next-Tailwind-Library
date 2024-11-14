"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string[];
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className={`w-[1000px] flex justify-between items-center px-4 py-3 text-left font-medium bg-white hover:bg-gray-100`}
        onClick={toggleAccordion}
      >
        <span className="text-xl font-bold">{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className={`px-4 py-2 bg-white mt-2`}>
          {content.map((line, index) => (
            <p key={index} className="text-base text-gray-700 mb-4">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
