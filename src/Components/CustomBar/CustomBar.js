import React, { useState, useEffect, useRef } from "react";
import "./CustomBar.css";

const CustomBar = ({ value }) => {
  const [width, setWidth] = useState(20); // its better to set the initial value to 0
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set width to trigger the animation when the component becomes visible
            setWidth(value);
            observer.disconnect(); // Disconnect the observer after triggering the animation
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [value]);

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 0,
  };

  const fillerStyles = {
    height: "100%",
    width: `${width}%`,
    backgroundColor: "var(--color-text-secondary)",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1.0s ease",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    borderRadius: 50,
    border: "3px solid var(--color-hightlight)",
    backgroundColor: "var(--color-hightlight)",
  };

  return (
    <>
      <div ref={containerRef} style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${width}%`}</span>
        </div>
      </div>
    </>
  );
};

export default CustomBar;
