import React, {useState} from 'react';
import KanbanCard from './KanbanCard';
import PriorityBar from "./PriorityBar"

const KanbanBoard = () => {
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
      {
        "id": "CAM-4",
        "title": "Implement Email Notification System",
        "tag": ["Feature Request"],
        "userId": "usr-1",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-5",
        "title": "Enhance Search Functionality",
        "tag": ["Feature Request"],
        "userId": "usr-5",
        "status": "In progress",
        "priority": 0
      },
      {
        "id": "CAM-6",
        "title": "Third-Party Payment Gateway",
        "tag": ["Feature Request"],
        "userId": "usr-2",
        "status": "Todo",
        "priority": 1
      },
      {
        "id": "CAM-7",
        "title": "Create Onboarding Tutorial for New Users",
        "tag": ["Feature Request"],
        "userId": "usr-1",
        "status": "Backlog",
        "priority": 2
      },
      {
        "id": "CAM-8",
        "title": "Implement Role-Based Access Control (RBAC)",
        "tag": ["Feature Request"],
        "userId": "usr-3",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-9",
        "title": "Upgrade Server Infrastructure",
        "tag": ["Feature Request"],
        "userId": "usr-5",
        "status": "Todo",
        "priority": 2
      },
      {
        "id": "CAM-10",
        "title": "Conduct Security Vulnerability Assessment",
        "tag": ["Feature Request"],
        "userId": "usr-4",
        "status": "Backlog",
        "priority": 1
      }
]);

<<<<<<< HEAD
  const priorityLvls = [0,4,3,2,1];
=======
  const priorityLvls = [0,1,2,3,4];
>>>>>>> a62de241045eda8370e737bcec4fcf4a84369c17

  return (
    <div className="kanban-board">
      {priorityLvls.map((priority) => (
        <div key={priority} className="kanban-column">
          <h2>Priority {priority}</h2>
          {toDo
            .filter((task) => task.priority === priority)
            .map((task) => (
              <KanbanCard key={task.id} {...task} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
