import React, { Component } from "react";
import "./Cards.css";
// import images from "./../../../public/images/anna.jpeg"

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentGame: 1,
            score: 0,
            topScore: 0
        }
    }


    onClick = (event) => {
        this.clickCheck();
        this.props.shuffle();
    };

    componentWillReceiveProps(nextProps) {
        if (parseInt(nextProps.currentGame) !== parseInt(this.state.currentGame)) {
            this.setState({ count: 0 });
            this.setState({ currentGame: nextProps.currentGame });
            // console.log("Princess reset: ", this.props.name);
        }
    }

    clickCheck = () => {
        this.setState({ count: this.state.count + 1 });

        if (this.state.count === 1) {
            this.props.endGame();
        } else {
            this.props.changeScore();
        }
    };

    render() {
        return (
            <div className="card" onClick={this.onClick}>
                <div className="img-container">
                    <img alt={this.props.name} src={this.props.image} />
                </div>
            </div>
        )
    }

};


export default Cards;