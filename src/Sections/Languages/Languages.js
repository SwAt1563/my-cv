import "./Languages.css";
import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";
import { Section } from "../../Components/index";

import { languages } from "../../Data/Languages";

const Languages = () => {
 

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
                duration: 2000,
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
      <Section id="languages" title="Languages" >
        <div className="container text-center" ref={componentRef}>
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
      </Section>
    </>
  );
};

export default Languages;
