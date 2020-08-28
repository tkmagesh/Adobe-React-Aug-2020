import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function spinnerReducer(currentState = 50, action){
  if (action.type === 'UP') return currentState + 1;
  if (action.type === 'DOWN') return currentState - 1;
  return currentState;
}

const Spinner = () => {
  const value = useSelector(storeState => storeState);
  const dispatch = useDispatch();
  const onDownClick = () => dispatch({ type: 'DOWN'});
  const onUpClick = () => dispatch({ type: 'UP'});
  return(
    <div>
      <h3>Spinner</h3>
      <hr />
      <input type="button" value="DOWN" onClick={onDownClick} />
      <span>[ {value} ]</span>
      <input type="button" value="UP" onClick={onUpClick} />
    </div>
  )
}

const appStore = createStore(spinnerReducer);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Spinner />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
