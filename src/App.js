import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import Avatar from 'material-ui/Avatar';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    const rightIcons = (
      <div>
        <FlatButton
        href="https://github.com/PowerTaxi"
        target="_blank">
        <Avatar src ={github}/>
        </FlatButton>
        <FlatButton
        href="https://www.linkedin.com/in/evanpower7/"
        target="_blank">
        <Avatar src ={linkedin}/>
        </FlatButton>
      </div>
    );
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="App">
      {/*   <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        
        <AppBar position = "static"
          titleStyle={{textAlign:'left'}}
          title = "Evan Power"
          iconElementRight={rightIcons}
      />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
