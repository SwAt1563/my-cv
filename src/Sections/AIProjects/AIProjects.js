import "./AIProjects.css";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { Zoom } from "react-reveal";

const AIProjects = () => {
  const projects = [
    {
      title: "Detection of Cows in Images",
      description:
        "The system utilizes image processing techniques for the purpose of analyzing and categorizing images. Its training is based on a dataset consisting of labeled images encompassing various classes, namely cows, water, sky, and grass. Furthermore, the system incorporates a visualization feature designed to present detection results, such as the ability to apply specific coloration to the identified cows within the image.",
      url: "https://github.com/SwAt1563/Machine-Learning-Tutorial/tree/main/Cows%20Detections%20Models",
    },
    {
      title: "Tweet Spam Detector",
      description:
        "The Tweet Spam Detector repository contains a Python based solution for identifying and filtering out spam tweets from a large dataset. The solution uses machine learning algorithms to classify tweets as spam or not spam.",
      url: "https://github.com/SwAt1563/Machine-Learning-Tutorial/tree/main/Tutorial",
    },
    {
      title: "The Graduation Projects Distribution on Student Groups",
      description:
        "The system utilizes both Constraint Satisfaction Problem (CSP) Algorithm and Genetics Algorithm to optimize the distribution of projects among student groups.",
      url: "https://github.com/SwAt1563/genetics-algorithm-graduation-projects-distribution-on-student-groups-problem",
    },
    {
      title: "NLP Authorship Analysis",
      description:
        "This presents an authorship attribution project focused on analyzing writing styles in long Arabic texts written in classical Arabic. The study utilizes machine learning models to generate writer-specific fingerprints and differentiate between authors.",
      url: "https://github.com/SwAt1563/nlp-authorship-analysis",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <>
      <div className="ai-projects pt-5 pb-5">
        <h1 className="text-center ">Artificial Intelligence Projects</h1>
        <Container className="text-center">
          {projects.map((project, index) => (
            <div key={index} className="w-75 project-card mx-auto mt-4">
              <Button
                variant="outline-primary"
                className="mb-3 title-button"
                onClick={() => handleProjectClick(index)}
                block
              >
                {project.title}
              </Button>
              {selectedProject === index && (
                
                  <Card className="rounded ">
                    <Card.Body>
                      <Card.Text>{project.description}</Card.Text>
                      <Button
                        variant="primary"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                      >
                        View on GitHub
                      </Button>
                    </Card.Body>
                  </Card>
                
              )}
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default AIProjects;
