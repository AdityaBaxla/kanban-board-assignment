import React from 'react';
import '../css/KanbanCard.css';
const KanbanCard = ({id, title, tag, userId, status, priority}) => {
    return (
        <div className="kanban-card">
        <div className='card-id'>{id}</div>
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-info">
          <p>{tag.join(', ')}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>
      </div>
    )
}

export default KanbanCard;