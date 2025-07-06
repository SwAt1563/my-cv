import "./WebProjects.css";


import { HorizontalCard } from "../../Components/index";

import { Section } from "../../Components/index";

import { projectsData } from "../../Data/WebProjects";

const WebProjects = () => {
  
  return (
    <>
      <Section id="web-projects" title="Public Web Projects">
        <div class="container py-4">
          {projectsData.map((data, index) => (
            <HorizontalCard key={index} {...data} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default WebProjects;
