import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardPriority from "./components/board/BoardPriority.jsx";
import BoardStatus from "./components/board/BoardStatus.jsx";
import BoardUser from "./components/board/BoardUser.jsx";
import "./App.css";

import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

//getting the json from api provided
const api = "https://api.quicksell.co/v1/internal/frontend-assignment";
//for local testing
const api2 = "http://localhost:5000/";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortBy") || "title"
  );
  const [showDropdown, setDropDown] = useState(
    localStorage.getItem("showDropdown") === "true" || false
  );

  // storing required useStates to local storage to keep persistant state for reload
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
    localStorage.setItem("showDropdown", showDropdown.toString());
  }, [groupBy, sortBy, showDropdown]);

  // handling chaning groupby dropdown
  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  // handling changing sortby dropdown
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
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
    const status = ticket.status.toLowerCase();
    if (ticketsByStatus[status]) {
      ticketsByStatus[status].push(ticket);
    }
  });

  tickets.forEach((ticket) => {
    const priority = ticket.priority;
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

  /* i would have ideally spilt the app component into smaller chunks, like Navbar.jsx, datafetch.js
  but i was getting into some issues */

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
                <select
                  className="dd-area"
                  name="ordering"
                  id="ordering"
                  onChange={handleSortByChange}
                >
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
            Object.entries(ticketsByStatus).map(([status, tickets]) => {
              const sortedTickets =
                sortBy === "title"
                  ? tickets.sort((a, b) =>
                      a.title.localeCompare(b.title, undefined, {
                        sensitivity: "base",
                      })
                    )
                  : tickets.sort((a, b) => b.priority - a.priority);

              return (
                <BoardStatus
                  key={status}
                  status={status}
                  tickets={sortedTickets}
                  users={users}
                />
              );
            })
          ) : groupBy === "priority" ? (
            Object.entries(ticketsByPriority).map(([priority, tickets]) => {
              const sortedTickets =
                sortBy === "title"
                  ? tickets.sort((a, b) =>
                      a.title.localeCompare(b.title, undefined, {
                        sensitivity: "base",
                      })
                    )
                  : tickets.sort((a, b) => b.priority - a.priority);

              return (
                <BoardPriority
                  key={priority}
                  tickets={sortedTickets}
                  priority={priority}
                />
              );
            })
          ) : groupBy === "user" ? (
            Object.entries(ticketsByUser).map(([userid, tickets]) => {
              const sortedTickets =
                sortBy === "title"
                  ? tickets.sort((a, b) =>
                      a.title.localeCompare(b.title, undefined, {
                        sensitivity: "base",
                      })
                    )
                  : tickets.sort((a, b) => b.priority - a.priority);

              return (
                <BoardUser
                  key={userid}
                  tickets={sortedTickets}
                  userid={userid}
                  users={users}
                />
              );
            })
          ) : (
            <p>No data, check api</p>
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
