import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux';
import store from './store/store';

import NavBar from "./components/NavBar";


//importing the router for the DOM
import Router from "./Router";

class App extends Component {
  render() {
    return (
      //provider provide a way to share states between components
      <Provider store={store}> 
      <div className="App">
        <NavBar />
        <Router />
        <Container> hey! </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
