import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'




const BoardStatus = ({status, tickets}) => {

    const priorityLvls = [0,4,3,2,1]
    return(
        <div className='board'>
            <div className='board-top'>
                <p className='board-top-title'>status {status}</p>
                <span> 2 </span>
                <span className='more-top-title'>+ ...</span>
            </div>
            <div className='board-cards'>
                {tickets.map(tick => (
                    <Card key={tick.id} title={tick.title}/>
                ))}
                
            </div>
        </div>
    )
}

export default BoardStatus;