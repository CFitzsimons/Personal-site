import React from 'react';
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
export default class Example extends React.Component {
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
                  <NavLink to="/cv" activeClassName="active" tag ={RRNavLink}>CV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Projects</NavLink>
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
          </div>
    );
  }
}