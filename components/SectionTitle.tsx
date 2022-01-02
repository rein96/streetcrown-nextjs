import React from 'react';

interface SectionTitleProps {
  firstWords?: string;
  secondWords: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  firstWords = 'Our',
  secondWords,
  className = '',
}) => {
  return (
    <h3
      className={`relative text-center text-white text-2xl md:text-3xl font-semibold letter-spacing-1px tracking-wider ${className}`}
    >
      {firstWords} <span className='text-red'>{secondWords}</span>
    </h3>
  );
};

export default SectionTitle;
