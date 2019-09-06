import React from 'react';
import logo from './logo.svg';
import mas from './agregar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a className="App-link">To  Do List!</a>
      </nav>
      <div >
        <div className="Task">
          <a>Tarea 1</a>
          <img src={mas} ></img>  
          </div>
        <div className="Task">Tarea 2</div>
        <div className="Task">Tarea 3</div>
      </div>
    </div>
  );
}

export default App;
