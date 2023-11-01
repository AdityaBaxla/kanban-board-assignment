import React from 'react'
import '../css/PriorityBar.css'

const PriorityBar = (/*{priorityLvl, numItem}*/) => {
    const priorityIcon = '...'
    const text = 'priority lvl'
    return (
        <div className="priority-bar">
            <p>{priorityIcon} {text} + - </p>
        </div>
    )
}

export default PriorityBar;