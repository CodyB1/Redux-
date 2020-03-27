import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/index.js'


function App() {
  const counter = useSelector (state => state.counterReducer);
  const logged = useSelector (state => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h3>VALUABLE INFO</h3> : '' }
    </div>
  );
}

export default App;
