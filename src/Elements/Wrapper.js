import React from 'react';
import '../StyleSheets/Wrapper.css'; // Import the CSS file for styles

const Wrapper = ({ children, backgroundColor }) => {
  const wrapperStyle = {
    backgroundColor: backgroundColor, // Use backgroundColor prop
    minHeight: '100vh',
    width: '100vw'
  };

  return <div className="wrapper" style={wrapperStyle}>{children}</div>;
};

export default Wrapper;
