import React from "react";
import "./Cards.css";


const Cards = props => {

    <div className="img-container">
        <a onClick={() => props.selectPrincess(props.id)} className = { props.score === 0 ? "image image_ex" : "image"} >
            <img className="card" alt={props.id} src={props.image} />
        </a>
    </div>



};


export default Cards;