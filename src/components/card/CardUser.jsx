import React from "react";
import './Card.css'
import {GoDotFill}  from "react-icons/go";


import usr_1 from "../../assets/avatars/usr-1.png"
import usr_2 from "../../assets/avatars/usr-2.png"
import usr_3 from "../../assets/avatars/usr-3.png"
import usr_4 from "../../assets/avatars/usr-4.png"
import usr_5 from "../../assets/avatars/usr-5.png"
import usr_6 from "../../assets/avatars/usr-6.png"

const imageMap = {
    'usr-1' : usr_1,
    'usr-2' : usr_2,
    'usr-3' : usr_3,
    'usr-4' : usr_4,
    'usr-5' : usr_5,
    'usr-6' : usr_6,
    
}

const CardUser = ({title, id, tag, userId, status}) => {
    return(
        <div className="card">
            <div className="card-id">{id}</div>
            <div className="profile"></div>
            <div className="title">{title}</div>
            <div className="bottom-bar">
                <span id="card-icon" className="bot-left">!</span> <span className="card-labels"><span id="feature-id">{<GoDotFill background-color='white'/>}</span><span id="tag">{tag}</span></span>
            </div>
        </div>
    )
}

export default CardUser;