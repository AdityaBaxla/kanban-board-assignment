import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'




const BoardStatus = ({status, tickets}) => {

    const priorityLvls = [0,4,3,2,1]

    const cardCount = tickets.length
    return(
        <div className='board'>
            <div className='board-top'>
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