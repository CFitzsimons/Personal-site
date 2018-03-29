import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron, Media} from 'reactstrap';
import Nav from './Nav';
import MainArea from './MainArea';
import evan from './evan.jpg';
class App extends Component {
  
  render() {
    return (
      <div>
        <Nav/>
        <MainArea/>
      </div>
    );
  }
}

export default App;
