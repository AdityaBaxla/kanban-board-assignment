import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanBoard = (tickets) => {
  const dummyCardData = {
    id: 'CAM-1',
    title: 'Conduct Security Vulnerability Assesment',
    tag: ['Feature Request'],
    userId: 'usr-1',
    priority: 2,
    status: 'In Progress',
  };

  const uniquePriorities = [...new Set(tickets.map((ticket) => ticket.priority))];

  return (
    <div className="kanban-board">
      <div className="column">
        <KanbanCard {...dummyCardData} />
      </div>
      {uniquePriorities.map((priority) => (
        <div key={priority} className="column">
          <h2>Priority {priority}</h2>
          {tickets
            .filter((ticket) => ticket.priority === priority)
            .map((ticket) => (
              <KanbanCard key={ticket.id} title={ticket.title} tag={ticket.tag} userId={ticket.userId} status={ticket.status} priority={ticket.priority} />
            ))}
        </div>
      ))}
    </div>
    
  );
};

export default KanbanBoard;
