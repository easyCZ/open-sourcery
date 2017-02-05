import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';
import Theme from './Theme';


class App extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={Theme}>
        <div>
          <AppBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
