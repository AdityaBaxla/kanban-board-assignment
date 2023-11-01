import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanBoard = () => {
  const dummyCardData = {
    id: 'CAM-1',
    title: 'Conduct Security Vulnerability Assesment',
    tag: ['Feature Request'],
    userId: 'usr-1',
    priority: 2,
    status: 'In Progress',
  };

  return (
    <div className="kanban-board">
      <div className="column">
        <h2>To Do</h2>
        <KanbanCard {...dummyCardData} />
      </div>
      {/* ... Other columns and cards */}
    </div>
  );
};

export default KanbanBoard;
