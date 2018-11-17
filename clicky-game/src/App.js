import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    selectedPrincess: image,
    unselectedPrincess: image
  };



  


  render() {
    return (
      <div>
        <Wrapper>
          <Navbar>
          message = {this.state.message}
          score = {this.state.score}|topScore = {this.state.topScore}
          </Navbar>
          <Jumbotron/>

       
        {this.state.princesses.map(princess => (
            <Cards  
              id={princess.id}
              key={princess.id}
              image={princess.image}
              selectedPrincess={this.selectedPrincess}
              score={this.state.score}
            />
        ))}

          <Footer/>
        </Wrapper>
      </div>
    );
  }
}

export default App;