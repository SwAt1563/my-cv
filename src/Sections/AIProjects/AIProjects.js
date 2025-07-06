import "./AIProjects.css";
import { Card, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState } from "react";

import { Section } from "../../Components/index";
import { projects } from "../../Data/AIProjects";

const AIProjects = () => {
 

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <>
      <Section id="ai-projects" title="Public AI Projects">
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
      </Section>
    </>
  );
};

export default AIProjects;
