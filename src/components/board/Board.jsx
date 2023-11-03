import React, { useState } from 'react'
import './Board.css'
import Card from '../card/Card.jsx'




const Board = ({tickets, priority}) => {

    return(
        <div className='board'>
            <div className='board-top'>
                <p className='board-top-title'>priority {priority}</p>
                <span> 2 </span>
                <span className='more-top-title'>+ ...</span>
            </div>
            <div className='board-cards'>
            {   tickets.map(tick => (
                    <Card key={tick.id} title={tick.title}/>
                ))}
            </div>
        </div>
    )
}

export default Board;