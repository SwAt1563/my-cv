import "./Researches.css";

import { Section } from "../../Components/index";
import {researchPapers} from "../../Data/Researches";

const Researches = () => {
  return (
    <>
      <Section id="researches" title="Researches & Publications">
        <div className="researches-container">
        {researchPapers.map((paper, index) => (
          <div className="research-card" key={index}>
            <img src={paper.image} alt={paper.title} className="research-image" />
            <div className="research-content">
              {/* <h3>{paper.title}</h3>
              <p><strong>{paper.journal}</strong></p>
              <p>{paper.date}</p> */}
              <a href={paper.url} target="_blank" rel="noopener noreferrer">
                Read Paper
              </a>
            </div>
          </div>
        ))}
      </div>
      </Section>
    </>
  );
};

export default Researches;
