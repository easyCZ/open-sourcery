import React from 'react';


const styles = {
  container: {
    backgroundColor: 'white',
    padding: '0 16px',
    fontSize: '20px',
    height: '50px',
    lineHeight: 2.5,
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'
  }
}


const Header = (props) => {
  console.log(props)
  return (<div>
    <header style={styles.container}>
      OpenSourcery
    </header>
    <main>{props.children}</main>
  </div>)
}



export default Header;