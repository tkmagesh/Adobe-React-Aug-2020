import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {useSelector, useDispatch, Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';


function bugsReducer(currentState = [], action){
  switch (action.type) {
    case 'INIT_BUGS':
      return action.payload;
    default:
      return currentState;
  }
}

const rootReducer = combineReducers({
  bugsData : bugsReducer
});

/* function loggerMiddlewere(store){
  return function (next){
    return function (action){
      console.group(action.type);
      console.group('BEFORE');
      console.log(store.getState());
      console.groupEnd();
      console.log(action);
      next(action);
      console.group('AFTER');
      console.log(store.getState());
      console.groupEnd();
      console.groupEnd();
    }
  }
} */

/* function asyncMiddleware(store){
  return function (next){
    return function (action){
      if (typeof action === 'function'){
        action(store.dispatch);
      } else {
        return next(action);
      }
    }
  }
} */

/* const asyncMiddleware = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    action(dispatch, getState);
  } else {
    return next(action);
  }
} */


//const appStore = createStore(rootReducer, applyMiddleware(loggerMiddlewere, asyncMiddleware));

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk));

function getLocalBugs() {
  const bugs = [
    { id: 1, name: 'Bug - 1', isClosed: false },
    { id: 2, name: 'Bug - 2', isClosed: true },
    { id: 3, name: 'Bug - 3', isClosed: false },
  ];
  return bugs;
}


function getRemoteBugs() {
  return axios.get('http://localhost:3030/bugs')
    .then(response => response.data);
} 


var bugActions = {
  load(){
    //Async 
     return function(dispatch){
      const p = getRemoteBugs()
      p.then(function(bugs){
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
      });
    }
    
    //Sync
    /* 
    const bugs = getLocalBugs();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;  
    */
  }
}

const BugTracker = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugsData);

  const onLoadClick = () => {
    const loadAction = bugActions.load();
    dispatch(loadAction);
  }

  const bugItems = bugs.map((bug, index) => (
    <li key={index}>
      {bug.isClosed ? (<div className="bugname closed">{bug.name}</div>) : (<div className="bugname">{bug.name}</div>) }
      <div className="datetime">{bug.createdAt}</div>
      <input type="button" value="Remove" />
    </li>
  ));

  return (
    <div>
      <h3>Bugs</h3>
      <input type="button" value="Load Bugs" onClick={onLoadClick} />
      <hr/>
      <section className="stats">
        <span className="closed">0</span>
        <span> / </span>
        <span>{bugs.length}</span>
      </section>
      <section className="edit">
        <label htmlFor="">Bug Name :</label>
        <input type="text" />
        <input type="button" value="Add New" id="btnAddNew" />
      </section>
      <section className="list">
        <ol id="bugList">
         {bugItems}
        </ol>
        <input type="button" value="Remove Closed" />
      </section>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <h1>Bug Tracker</h1>
      <hr/>
      <BugTracker></BugTracker>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
