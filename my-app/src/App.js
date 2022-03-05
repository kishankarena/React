import React from 'react';
import './App.css';


function App() {

  return (
    <div className="container">
      <h2>Increment/Decrement Counter</h2>
      <div>
        <button className="action-counter">-</button>
        <input className="counter" type="text" value="0" />
        <button className="action-counter">+</button>
      </div>
    </div>
  );
}

export default App;
