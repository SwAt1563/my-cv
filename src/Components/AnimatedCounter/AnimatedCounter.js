import "./AnimatedCounter.css";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ value }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set width to trigger the animation when the component becomes visible
            animateCounter(value);
            observer.disconnect(); // Disconnect the observer after triggering the animation
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value]);

  const animateCounter = (targetValue) => {
    let startValue = 0;
    const duration = 10000; // Adjust the duration as needed
    const increment = Math.ceil(targetValue / (duration / 60)); // Calculate increment based on duration

    const interval = setInterval(() => {
      startValue += increment;
      setCounter(Math.min(startValue, targetValue));

      if (startValue >= targetValue) {
        clearInterval(interval);
      }
    }, 16); // 60 FPS

    // Ensure the target value is set at the end
    setCounter(targetValue);
  };

  return <span ref={counterRef}>{counter}</span>;
};

export default AnimatedCounter;
