import "./Services.css";

import { Section } from "../../Components/index";

import { servicesData } from "../../Data/Services";

const Services = () => {
  return (
    <>
      <Section id="services" title="Services">
        <div className="container">
          <div className="row mt-2">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="card col-md-4 col-sm-6 d-flex align-items-center justify-content-center"
              >
                <div className="card-body text-center">
                  <div className="mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
