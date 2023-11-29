import "./Section.css";

const Section = ({ id, title, icon, children }) => {
  //   const titleShadow = {
  //     position: "absolute",
  //     top: "0",
  //     left: "0",
  //     width: "100%",
  //     height: "100%",
  //     color: "var(--color-hightlight)",
  //     opacity: "0.1",
  //     zIndex: "1",
  //     fontSize: "5rem",
  //     transition: "all 0.5s ease-in-out",
  //   };
  return (
    <>
      <section id={id} className={`${id} pt-5 pb-5`}>
        <h1 className="section-title text-center mb-5">
          {title} {icon && icon}
          <div className="title-line-bg"></div>
          <div className="title-line"></div>
          {/* <div style={titleShadow} className="title-shadow">
            {title}
          </div> */}
        </h1>
        {children}
      </section>
    </>
  );
};

export default Section;
