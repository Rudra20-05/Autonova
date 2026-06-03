import React from 'react';

interface TextRollProps {
  text: string;
  className?: string;
}

export function TextRoll({ text, className = '' }: TextRollProps) {
  const chars = text.split('');

  return (
    <span className={`textRoll ${className}`}>
      <span className="textRollRow">
        {chars.map((char, index) => (
          <span
            key={index}
            className="textRollLetter"
            style={{ ['--i' as string]: index }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      <span className="textRollRow textRollClone" aria-hidden="true">
        {chars.map((char, index) => (
          <span
            key={index}
            className="textRollLetter"
            style={{ ['--i' as string]: index }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}
