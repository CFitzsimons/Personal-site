import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Avatar from 'material-ui/Avatar';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';

const style = {
  title: {
    flex: 1,
  },
  navigationTitle: {
    minWidth: 200,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <AppBar position= "static">
          <Toolbar>
            <Typography type="title" color="inherit" style={style.title}>
              Evan Power
            </Typography>
            <IconButton color="contrast" aria-label="Menu" href="https://github.com/PowerTaxi"
              target="_blank">
            <Avatar src ={github}/>
            </IconButton>
            <IconButton color="contrast" aria-label="Menu" href="https://www.linkedin.com/in/evanpower7/"
              target="_blank">
              <Avatar src ={linkedin}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
