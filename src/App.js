import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron, Media} from 'reactstrap';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import evan from './evan.jpg';
import CV from './cv.js'
import Projects from './projects.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
    <Router>
       <div> 
        <Navbar color = "warning" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/" className="mr-auto">Evan Power</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <RRNavLink to ="/">Home</RRNavLink>
              </NavItem>
              <NavItem>
                <RRNavLink to="/cv">CV</RRNavLink>
              </NavItem>
              <NavItem>
                <RRNavLink to ="/projects">Projects</RRNavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/PowerTaxi">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://linkedin.com/in/evanpower7">LinkedIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> 

        <Route path = "/" component={App}/>
        <Route path = "/cv" component={CV}/>
        <Route path = "/projects"component={Projects}/>  
    </div>    
    </Router>
    );
  }
}

export default App;
