import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


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
      <div>
        <Navbar color = "warning" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/" className="mr-auto">Evan Power</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">CV</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/PowerTaxi">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://linkedin.com/en/evpower7">LinkedIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


      </div>
    );
  }
}

export default App;
