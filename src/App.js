import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import './App.css'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <KanbanBoard/>
    </div>
  );
}

export default App;