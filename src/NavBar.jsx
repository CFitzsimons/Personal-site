import React, {Component} from 'react';

import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,
    NavItem,NavLink,UncontrolledDropdown,DropdownToggle,
    DropdownMenu,DropdownItem } from 'reactstrap';
import {Link,Route,BrowserRouter as Router, NavLink as RNavLink} from 'react-router-dom';

class NavBar extends React.Component {
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
        <Navbar color = "warning" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">Evan Power</NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <RNavLink exact to="/" active >Home</RNavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/cv">CV</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="https://github.com/PowerTaxi">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="https://linkedin.com/in/evanpower7">LinkedIn</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> 
    );
    }
}
export default NavBar