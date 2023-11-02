import React from 'react'
import './Board.css'
import Card from '../card/Card.jsx'

const Board = () => {
    return(
        <div className='board'>
            <div className='board-top'>
                <p className='board-top-title'>top title</p>
                <span> 2 </span>
                <span className='more-top-title'>+ ...</span>
            </div>
            <div className='board-cards'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Board;