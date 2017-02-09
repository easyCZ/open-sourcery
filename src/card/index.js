import React from 'react';


const styles= {
  container: {
    padding: '0.5em',
    backgroundColor: 'white',
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)'
  }
}


const Card = ({ style={}, children }) => (
  <div style={{ ...styles.container, ...style}}>
    {children}
  </div>
);


export default Card;