import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Navbar>
          </Navbar>
          <Jumbotron></Jumbotron>







          <Footer></Footer>
        </Wrapper>
      </div>
    );
  }
}

export default App;