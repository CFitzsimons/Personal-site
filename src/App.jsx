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

// const Routes = () => (
//   <Router>
//     <Route path = "/" component={App}/>
//     <Route path = "cv" component={CV}/>
//     <Route path = "projects" component={Projects}/>
//   </Router>
// );
class App extends Component {
   render() {
    return (
      <Router>
        <div>
          <Nav/> 
        </div>
     </Router>
    
    );
  }
}

export default App;
