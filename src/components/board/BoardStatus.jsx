import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'
import {GoXCircleFill,GoClockFill,GoCheckCircleFill,GoAlertFill, GoSkipFill, GoCircle} from 'react-icons/go'


const BoardStatus = ({status, tickets}) => {
    
    const iconMap = {
        todo:<GoCircle className="status-icon-style" color="#9C9BC7"/>,
        'in progress': <GoClockFill className="status-icon-style" color="#EBCB62" />,
        done: <GoCheckCircleFill className="status-icon-style" color="#606ACB"/>,
        canceled: <GoXCircleFill className="status-icon-style" color="#97A2B1"/>,
        backlog: <GoSkipFill className="status-icon-style" color="#FA5632"/>
    }
    const priorityLvls = [0,4,3,2,1]

    const cardCount = tickets.length
    return(
        <div className='board'>
            <div className='board-top'>
                <span id={iconMap[status]}> {iconMap[status]}</span>
                <p className='board-top-title'>{status}</p>
                <span> {cardCount} </span>
                <span className='more-top-title'>+ ...</span>
            </div>
            <div className='board-cards'>
                {tickets.map(tick => (
                     <Card key={tick.id} title={tick.title} id={tick.id} tag={tick.tag} userId={tick.userId} status={tick.status} />
                ))}
                
            </div>
        </div>
    )
}

export default BoardStatus; // count={setCardCount(cardCount+1)}