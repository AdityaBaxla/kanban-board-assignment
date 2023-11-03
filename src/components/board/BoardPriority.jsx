import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'




const BoardPriority = ({tickets, priority}) => {
    const priorityMap = {
        0 :'No priority',
        4 :'Urgent',
        3 : 'High',
        2 : 'Medium',
        1 : 'Low',
    }
    return(
        <div className='board'>
            <div className='board-top'>
                <p className='board-top-title'>{priorityMap[priority]}</p>
                <span> 2 </span>
                <span className='more-top-title'>+ ...</span>
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