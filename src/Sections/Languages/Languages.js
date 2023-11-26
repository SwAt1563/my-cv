import "./Languages.css";
import React, { useEffect } from "react";
import ProgressBar from "progressbar.js";

const Languages = () => {
  // Languages data
  const languages = [
    { name: "Arabic", level: "Native", percentage: 90 },
    { name: "English", level: "B1", percentage: 65 },
    { name: "Hebrew", level: "A1", percentage: 15 },
    { name: "Turkish", level: "A1", percentage: 20 },
  ];

  useEffect(() => {
    // Loop through each language and create a progress bar
    languages.forEach((language) => {
      const circle = document.getElementById(
        `${language.name.toLowerCase()}-circle`
      );

      const circleStyles = {
        width: "100px",
        height: "100px",
        position: "relative", // Add position relative for absolute positioning of text
      };

      Object.assign(circle.style, circleStyles);

      const bar = new ProgressBar.Circle(circle, {
        strokeWidth: 6,
        easing: "easeInOut",
        duration: 1400,
        color: "var(--color-hightlight)",
        trailColor: "var(--color-text-secondary)",
        trailWidth: 6,
        svgStyle: null,
        text: {
          autoStyleContainer: false,
        },
      });

      bar.setText(`${language.level}`); // Set the text inside the circle

      bar.animate(language.percentage / 100);
    });

    // Cleanup function
    return () => {
      languages.forEach((language) => {
        const circle = document.getElementById(
          `${language.name.toLowerCase()}-circle`
        );
        if (circle) {
          circle.innerHTML = ""; // Clear the container when the component is unmounted
        }
      });
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <>
      <div className="languages pt-3">
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
                <h5 className="language-name">{language.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
