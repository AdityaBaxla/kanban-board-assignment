import React from "react";
import './Card.css'
const Card = ({title}) => {
    return(
        <div className="card">
            <div className="card-id">CAM-11</div>
            <div className="profile">0</div>
            <div className="title">{title}</div>
            <div className="bottom-bar">
                <span className="bot-left">!</span> <span className="card-labels">feature request</span>
            </div>
        </div>
    )
}

export default Card;