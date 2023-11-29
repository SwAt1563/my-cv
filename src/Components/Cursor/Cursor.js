// // Try to read options from json file

import AnimatedCursor from "react-animated-cursor";
// https://www.npmjs.com/package/react-animated-cursor?activeTab=readme

const Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="99, 178, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          {
            target: ".custom1",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
    </>
  );
};

export default Cursor;
