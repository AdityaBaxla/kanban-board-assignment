import React from "react";
import './Card.css'
import {GoDotFill}  from "react-icons/go";

const Card = ({title, id, tag, userId, status}) => {
    return(
        <div className="card">
            <div className="card-id">{id}</div>
            <div className="profile">0</div>
            <div className="title">{title}</div>
            <div className="bottom-bar">
                <span id="card-icon" className="bot-left">!</span> <span className="card-labels"><span id="feature-id">{<GoDotFill background-color='white'/>}</span><span id="tag">{tag}</span></span>
            </div>
        </div>
    )
}

export default Card;