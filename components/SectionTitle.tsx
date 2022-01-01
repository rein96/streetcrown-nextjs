import React from 'react';

function SectionTitle({ firstWords = 'Our', secondWords, className = '' }) {
  return (
    <h3
      className={`relative text-center text-white text-2xl md:text-3xl font-medium letter-spacing-1px ${className}`}
    >
      {firstWords} <span className="text-red">{secondWords}</span>
    </h3>
  );
}

export default SectionTitle;
