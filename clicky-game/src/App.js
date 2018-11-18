import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import princesses from "./princess.json"
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    message: "Click an image to begin",
    princesses,
    score: 0,
    topScore: 0,
    currentGame: 1,
  
  };


shuffle = () => {
  console.log("Shuffling...");
  const princesses = this.state.princesses;
  for (var i = 0; i < princesses.lenght-1; i++){
    var j = i + Math.floor(Math.random() * (princesses.length - i ));
    var placeholder = princesses[j];
    princesses[j] = princesses[i];
    princesses[i] = placeholder;
  }

  this.setState({princesses});
};

changeScore = () => {
  console.log("Score :", this.state.score);
  this.setState({score: this.state.score + 1});
};

endGame = () => {
  if (this.state.score > this.state.topScore){
    this.setState({topScore: this.state.score});
    this.setState({message: "Yay! Top Score!! Play Again!"})
  }
    this.setState({ score: 0 });
    this.setState({ currentGame: this.state.currentGame + 1});
    this.forceUpdate();
}
  


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
              ref={instance => {this.Cards = instance;}}
              endGame={this.endGame}
              changeScore={this.changeScore}
              shuffle={this.shuffle}
              score={this.state.score}
              currentGame={this.state.currentGame}
              id={princess.id}
              key={princess.id}
              image={princess.image}
            />
        ))}

          <Footer/>
        </Wrapper>
      </div>
    );
  }
}

export default App;