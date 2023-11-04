import React, { useEffect, useState } from "react";
import BoardPriority from "./components/board/BoardPriority.jsx";
import "./App.css";
import axios from "axios";

import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";
import BoardStatus from "./components/board/BoardStatus.jsx";

// apiData = {"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]}

//console.log(fetchData())
const priorityLvls = [0, 4, 3, 2, 1];

//getting the json from api provided
const api = "https://api.quicksell.co/v1/internal/frontend-assignment";
//for local testing
const api2 = "http://localhost:5000/";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); //status, priority, users
  const [showDropdown, setDropDown] = useState(false);

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };
  useEffect(() => {
    async function fetch() {
      const res = await axios.get(api);
      setTickets(res.data.tickets);
      //console.log(res.data.users)
      setUsers(res.data.users);
    }

    fetch();
  }, []);

  // putting empty array ticketsByStatus
  const ticketsByStatus = {
    todo: [],
    "in progress": [],
    backlog: [],
    done: [],
    canceled: [],
  };

  //putting empty array into ticketsByPriority
  const ticketsByPriority = {
    0: [],
    4: [],
    3: [],
    2: [],
    1: [],
  };

  //putting empty array into ticketsByUser
  const ticketsByUser = {};
  users.forEach((user) => {
    const id = user.id;
    ticketsByUser[id] = [];
  });

  tickets.forEach((ticket) => {
    const status = ticket.status.toLowerCase(); // Ensure the status is lowercase for consistency
    if (ticketsByStatus[status]) {
      ticketsByStatus[status].push(ticket);
    }
  });

  tickets.forEach((ticket) => {
    const priority = ticket.priority; // Ensure the status is lowercase for consistency
    if (ticketsByPriority[priority]) {
      ticketsByPriority[priority].push(ticket);
    }
  });

  tickets.forEach((ticket) => {
    const user = ticket.userId; //
    if (ticketsByUser[user]) {
      ticketsByUser[user].push(ticket);
    }
  });

  console.log(ticketsByUser);

  return (
    <div className="App">
      <div className="navbar">
        <div className="dropdown">
          <button
            type="button"
            onClick={() => setDropDown(!showDropdown)}
            className="btn"
          >
            <LuSettings2 /> Display <BiChevronDown />
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <div className="name-and-dd">
                <label for="grouping">Grouping</label>
                <select
                  className="dd-area"
                  name="grouping"
                  id="grouping"
                  onChange={handleGroupByChange}
                >
                  <option value="status">Status</option>
                  <option value="priority">Priority</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="name-and-dd">
                <label for="ordering">Ordering</label>
                <select className="dd-area" name="ordering" id="ordering">
                  <option value="title">Title</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="board-container">
        <div className="boards">
          {groupBy === "status" ? (
            Object.entries(ticketsByStatus).map(([status, tickets]) => (
              <BoardStatus key={status} status={status} tickets={tickets} />
            ))
          ) : groupBy === "priority" ? (
            Object.entries(ticketsByPriority).map(([priority, tickets]) => (
              <BoardPriority
                key={priority}
                priority={priority}
                tickets={tickets}
              />
            ))
          ) : (
            <p>no data</p>
          )}
        </div>
      </div>
    </div>
  );
};

// {priorityLvls.map((priority) => (
//   { data.filter((task) => task.priority === priority)
//     .map((task) => (

//   ))}
//   <Board key={priority} columnPriority={priority} />
// ))}

export default App;
