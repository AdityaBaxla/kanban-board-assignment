import React, {useState} from 'react';
import KanbanCard from './KanbanCard';
import PriorityBar from "./PriorityBar"

const KanbanBoard = () => {
  /*const dummyCardData = {
    id: 'CAM-1',
    title: 'Conduct Security Vulnerability Assesment',
    tag: ['Feature Request'],
    userId: 'usr-1',
    priority: 2,
    status: 'In Progress',
  };
  const dummyCardData2 = {
    id: 'CAM-2',
    title: 'Off Security Vulnerability Assesment',
    tag: ['Feature Request'],
    userId: 'usr-2',
    priority: 1,
    status: 'In Progress',
  };
  */

  const [toDo, setToDo] = useState([
  {
    "id": "CAM-1",
    "title": "Update User Profile Page UI",
    "tag": ["Feature request"],
    "userId": "usr-1",
    "status": "Todo",
    "priority": 4
  },
  {
    "id": "CAM-2",
    "title": "Add Multi-Language Support - Enable multi-language support within the application.",
    "tag": ["Feature Request"],
    "userId": "usr-2",
    "status": "In progress",
    "priority": 3
  },
  {
    "id": "CAM-3",
    "title": "Optimize Database Queries for Performance",
    "tag": ["Feature Request"],
    "userId": "usr-2",
    "status": "In progress",
    "priority": 1
  },
  // ... other items
]);


  return (
    <div className="kanban-board">
      <div className="column">
        {toDo && toDo.map(task => {
          return(
            <KanbanCard{...task}/>
          )
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
