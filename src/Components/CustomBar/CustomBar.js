import "./CustomBar.css";
const CustomBar = ({value}) => {

    const containerStyles = {
        height: 20,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 0,
      };
    
      const fillerStyles = {
        height: "100%",
        width: `${value}%`,
        backgroundColor: "var(--color-text-secondary)",
        borderRadius: "inherit",
        textAlign: "right",
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
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${value}%`}</span>
        </div>
      </div>
    </>
  );
};

export default CustomBar;
