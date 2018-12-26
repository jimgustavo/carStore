import React, { Component } from "react";

import Router from "../Router";
/*
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class NavBar extends Component {
  state = { isOpen: false };
  constructor(props) {
    super(props);
    this.toggleHavToBeenBined = this.toggleHavToBeenBined.bind(this);
  }

  toggleHavToBeenBined() {
    console.log("Binded function because Im using arrow function");
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/components/Homepage">Car Store</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/ShoppingList">
                    Shopping List
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/Cart">Cart</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/SignIn">Sign in</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/SignUp">Sign up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
*/

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
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
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">Car Store</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                  <NavLink href="/ShoppingList">
                    Shopping List
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Cart">Cart</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SignIn">Sign in</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SignUp">Sign up</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

