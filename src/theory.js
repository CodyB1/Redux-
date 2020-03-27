import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


// STORE -> A GLOBAL STATE

//ACTION -> DESCRIBES WHAT YOU WANT TO DO (a function that returns an object)
const increment = () => {
  return {
    type : 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type : 'DECREMENT'
  }
}
//REDUCER  -> DESCRIBES HOW YOUR ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT ' :
      return state + 1;
    case 'DECREMENT' :
        return state - 1;

  }
};



let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
// DISPATCH -> A WAY TO EXECUTE THE ACTION
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
