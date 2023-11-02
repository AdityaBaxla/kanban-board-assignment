import {LuSettings2} from  'react-icons/lu'
import {BiChevronDown} from 'react-icons/bi'
/*import React from 'react';
import '../css/Navbar.css'

const Navbar = () => {
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    // Implement your sorting logic here
    console.log(`Sorting by: ${selectedOption}`);
  };

  return (
    <nav className="navbar">
      <div className="dropdown">
        <select onChange={handleSortChange}>
          <option value="priority">Sort by Priority</option>
          <option value="status">Sort Status</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import '../css/Navbar.css'; // Import your CSS file for styling
import DiplayBtn from './DisplayBtn';

const NavBar = () => {
  return (<div className='dropdown'>
    <button><LuSettings2/> Display <BiChevronDown/></button>
    <div className='dropdown-content'>
      <label for="grouping">Grouping</label>
      <select name="grouping" id='grouping'>
        <option value="{status}">Status</option>
        <option value="{priority}">Priority</option>
        <option value="{user}">User</option>
      </select>
      <label for="ordering">Ordering</label>
      <select name="ordering" id='ordering'>
        <option value="{title}">Title</option>
        <option value="{priority}">Priority</option>
      </select>
    </div>
  </div>
  )
}

export default NavBar;