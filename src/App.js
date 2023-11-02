import React from "react";
import Board from "./components/board/Board.jsx"
import './App.css'

import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

// apiData = {"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]}


const App = () => {
  return (
    <div className="App">
      <div className='dropdown'>
        <button className="btn"  onclick="document.querySelector('.dropdown-content').style.display = 'block'"><LuSettings2/> Display <BiChevronDown/></button>
        <div className='dropdown-content'>
          <div>
          <label for="grouping">Grouping</label>
          <select name="grouping" id='grouping'>
            <option value="{status}">Status</option>
            <option value="{priority}">Priority</option>
            <option value="{user}">User</option>
          </select>
        </div>
        <div>
          <label for="ordering">Ordering</label>
          <select name="ordering" id='ordering'>
            <option value="{title}">Title</option>
            <option value="{priority}">Priority</option>
        </select>
        </div>
      </div>
      
      </div>
      <div className="navbar">
        <h2>this is nav bar.. make it blue</h2>
      </div>
      <div className="board-container">
        <div className="boards">
          <Board/>
          <Board/>
          <Board/>
          <Board/>
          <Board/>
        </div>
      </div>
    </div>
  );
}

export default App;