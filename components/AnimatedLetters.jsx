import React from 'react';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span 
          key={char + i} 
          className={letterClass} 
          style={
            letterClass === "textAnimate" 
              ? { animationDelay: `${(i + idx) / 10}s` }
              : {}
          }
        >
          <span style={i === 5 ? { color: '#FFD700',fontSize: '120px' } : {}}>
            {char}
          </span>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters;