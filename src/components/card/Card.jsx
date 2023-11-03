import React from "react";
import './Card.css'
const Card = ({title, id, tag, userId, status}) => {
    return(
        <div className="card">
            <div className="card-id">{id}</div>
            <div className="profile">0</div>
            <div className="title">{title}</div>
            <div className="bottom-bar">
                <span className="bot-left">!</span> <span className="card-labels">{tag}</span>
            </div>
        </div>
    )
}

export default Card;