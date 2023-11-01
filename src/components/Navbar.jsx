import React from 'react';

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
          <option value="alphabetical">Sort Alphabetically</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
