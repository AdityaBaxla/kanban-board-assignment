import React, { useState } from 'react'
import './Board.css'
import CardUser from '../card/CardUser.jsx'
import {GoXCircleFill,GoClockFill,GoCheckCircleFill,GoAlertFill, GoSkipFill, GoCircle} from 'react-icons/go'
import {HiOutlineEllipsisHorizontalm, HiPlus, HiMiniPlus, HiEllipsisHorizontal} from 'react-icons/hi2'

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

// mapping user id to name and is active state



const BoardUser = ({userid, tickets, users}) => {
    
    const iconMap = {
        todo:<GoCircle className="status-icon-style" color="#95B736" />,
        'in progress': <GoClockFill className="status-icon-style" color="#EBCB62" />,
        done: <GoCheckCircleFill className="status-icon-style" color="#606ACB"/>,
        canceled: <GoXCircleFill className="status-icon-style" color="#97A2B1"/>,
        backlog: <GoSkipFill className="status-icon-style" color="#FA5632"/>
    }

    const name = users[userid]
    console.log(users.name)
    const cardCount = tickets.length

    return(
        <div className='board'>
            <div className='board-top'>
                <span id={imageMap[userid]}> <img src={imageMap[userid]} width={20} height={20}></img></span>
                <p className='board-top-title'>{tickets.userId}</p>
                <span>{name}</span>
                <span className='card-count'> {cardCount} </span>
                <span className='more-top-title'><span><HiMiniPlus color="rgb(138, 138, 138)"/></span><HiEllipsisHorizontal color="rgb(138, 138, 138)"/></span>
            </div>
            <div className='board-cards'>
                {tickets.map(tick => (
                     <CardUser key={tick.id} title={tick.title} id={tick.id} tag={tick.tag} userId={tick.userId} status={tick.status} />
                ))}
                
            </div>
        </div>
    )
}

export default BoardUser; 