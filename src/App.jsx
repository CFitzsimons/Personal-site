import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron, Media} from 'reactstrap';
import {Link,Route,BrowserRouter as Router, NavLink as RNavLink} from 'react-router-dom';
import evan from './evan.jpg';

import CV from './components/Cv';
import EvanPage from './components/evan'
import Projects from './components/Projects';
import Nav from './NavBar';

const Routes = () => (
  <Router>
    <div>
      {/* Previously you had the component here as App, creating a circular reference */}
      <Route path="/" component={EvanPage}/>
      <Route path="/cv" component={CV}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
);
class App extends Component {
   render() {
    return (
      <div>
        {/* Here we're saying 'always display the nav bar THEN display the router component under it */}
        <Nav />
        <Routes />
      </div>
    
    );
  }
}

export default App;
