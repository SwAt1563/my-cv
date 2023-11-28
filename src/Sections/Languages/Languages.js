import "./Languages.css";
import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";

const Languages = () => {
  // Languages data
  const languages = [
    { name: "Arabic", level: "Native", percentage: 90 },
    { name: "English", level: "B1", percentage: 65 },
    { name: "Hebrew", level: "A1", percentage: 15 },
    { name: "Turkish", level: "A1", percentage: 20 },
  ];

  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Component is in view, start animation
            languages.forEach((language) => {
              const circle = document.getElementById(
                `${language.name.toLowerCase()}-circle`
              );

              const circleStyles = {
                width: "100px",
                height: "100px",
                position: "relative",
              };

              Object.assign(circle.style, circleStyles);

              const bar = new ProgressBar.Circle(circle, {
                strokeWidth: 6,
                easing: "easeInOut",
                duration: 3000,
                color: "var(--color-hightlight)",
                trailColor: "var(--color-text-secondary)",
                trailWidth: 6,
                svgStyle: null,
                text: {
                  autoStyleContainer: false,
                },
              });

              bar.setText(`<h5>${language.level}</h5>`);
              bar.animate(language.percentage / 100);
            });

            // Stop observing once the animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold based on your needs
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [languages]);

  return (
    <>
      <div className="languages pt-3" ref={componentRef}>
        <div className="container text-center">
          <h1 className="mb-3">Languages</h1>
          <div className="row ">
            {languages.map((language) => (
              <div
                key={language.name}
                className="language col-md-3 col-sm-6 d-flex align-items-center justify-content-center mb-4"
              >
                <div
                  id={`${language.name.toLowerCase()}-circle`}
                  className="language-circle"
                ></div>
                <h4 className="language-name">{language.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
