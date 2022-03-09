import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './redux/actions/actions'


function App() {
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Increment/Decrement Counter</h2>
      <div>
        <button className="action-counter" onClick={() => dispatch(decNumber())}>-</button>
        <input className="counter" type="text" value={myState} />
        <button className="action-counter" onClick={() => dispatch(incNumber(5))}>+</button>
      </div>
    </div>
  );
}

export default App;
