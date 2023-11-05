import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'
import {GoXCircleFill,GoClockFill,GoCheckCircleFill,GoAlertFill, GoSkipFill, GoCircle} from 'react-icons/go'
import {HiOutlineEllipsisHorizontalm, HiPlus, HiMiniPlus, HiEllipsisHorizontal} from 'react-icons/hi2'




const BoardPriority = ({tickets, priority}) => {
    const priorityMap = {
        0 :'No priority',
        4 :'Urgent',
        3 : 'High',
        2 : 'Medium',
        1 : 'Low',
    }

    const cardCount = tickets.length
    
    return(
        <div className='board'>
            <div className='board-top'>
                <p className='board-top-title'>{priorityMap[priority]}</p>
                <span className='card-count'> {cardCount} </span>
                <span className='more-top-title'><span><HiMiniPlus color="rgb(138, 138, 138)"/></span><HiEllipsisHorizontal color="rgb(138, 138, 138)"/></span>
            </div>
            <div className='board-cards'>
            {   tickets.map(tick => (
                    <Card key={tick.id} title={tick.title} id={tick.id} tag={tick.tag} userId={tick.userId} status={tick.status} />
                ))}
            </div>
        </div>
    )
}

export default BoardPriority;