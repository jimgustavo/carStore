import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import NavBar from "./components/NavBar";

//importing the router for the DOM
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />
        <Container> hey! </Container>
      </div>
    );
  }
}

export default App;
