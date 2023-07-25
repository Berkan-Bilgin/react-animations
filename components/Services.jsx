import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function Services() {
  const boxRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          boxRef.current.classList.remove('run-animation');
          void boxRef.current.offsetWidth;  
          boxRef.current.classList.add('run-animation');
          setStart(true);
        } else {
          setStart(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div id='services' className="h-[800px] bg-turquoise flex justify-center overflow-x-hidden">
    <div ref={boxRef} className="animatedBox">
    <div className="flex-1 flex items-center  absolute top-4 left-8 md:left-32 sm:left-20 bg-secondary p-3 font-Coolverica text-sm md:text-md sm:text-lg italic">Public Holders</div>
        <div className="flex-1 flex items-center  absolute top-20 left-8 md:left-32 sm:left-20 bg-secondary p-3 font-Coolverica text-sm md:text-md sm:text-9xl italic"><CountUp start={start ? 0 : null} end={98} duration={3} suffix="%" /></div>
        <div className="flex-1 flex items-center  absolute top-4 right-8 md:right-32 sm:right-20 z-10 bg-white p-3 font-Coolverica text-sm md:text-md sm:text-lg italic">Chainzoku</div>
        <div className="flex-1 flex items-center  absolute top-20 right-8 md:right-32 sm:right-20 z-10 bg-white p-3 font-Coolverica text-sm md:text-md sm:text-lg italic">%2</div>
    </div>
  </div>
  );
}
