import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {useSelector, useDispatch, Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//NEVER Return the UPDATED currentState from the reducer
//Always return a new state
function bugsReducer(currentState = [], action){
  switch (action.type) {
    case 'INIT_BUGS':
      return action.payload;
    case 'ADD_NEW_BUG' : 
      return [ ...currentState, action.payload];
    case 'UPDATE_BUG' :
      return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug );
    case 'REMOVE_BUG' :
      return currentState.filter(bug => bug.id !== action.payload.id);
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


const serviceEndPoint = 'http://localhost:3030/bugs';

const bugApi = { 
  getAll(){
    return axios.get(serviceEndPoint)
      .then(response => response.data);
  },
  save(bugData){
    if (bugData.id === 0){
      return axios.post(serviceEndPoint, bugData)
        .then(response => response.data);
    } else {
      return axios.put(`${serviceEndPoint}/${bugData.id}`, bugData)
        .then(response => response.data);
    }
  },
  remove(bugData){
    return axios.delete(`${serviceEndPoint}/${bugData.id}`)
      .then(response => response.data);
  }
};


var bugActions = {
  load(){
    //Async 
    /* return function(dispatch){
      const p = bugApi.getAll()
      p.then(function(bugs){
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
      });
    } */

    //using async await
    return async function (dispatch) {
      const bugs = await bugApi.getAll();
      const action = { type: 'INIT_BUGS', payload: bugs };
      dispatch(action);
    }
    
    //Sync
    /* 
    const bugs = getLocalBugs();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;  
    */
  },
  addNew(bugName){
    return async function(dispatch){
      const newBugData = {
        id : 0,
        name : bugName,
        isClosed : false, 
        createdAt : new Date()
      };
      const newBug = await bugApi.save(newBugData);
      const action = { type : 'ADD_NEW_BUG', payload : newBug };
      dispatch(action);
    }
  },
  toggle(bugToToggle){
    return async function(dispatch){
      bugToToggle.isClosed = !bugToToggle.isClosed;
      const toggledBug = await bugApi.save(bugToToggle);
      const action = { type : 'UPDATE_BUG', payload : toggledBug };
      dispatch(action);
    }
  },
  remove(bugToRemove){
    return async function(dispatch){
      await bugApi.remove(bugToRemove);
      const action = { type : 'REMOVE_BUG', payload : bugToRemove };
      dispatch(action);
    }
  }
}

const BugTracker = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugsData);
  const [newBugName, setNewBugName] = React.useState('');

  const onLoadClick = () => {
    const loadAction = bugActions.load();
    dispatch(loadAction);
  }

  const onAddNewClick = () => {
    const addNewAction = bugActions.addNew(newBugName);
    dispatch(addNewAction);
  }

  const onBugNameClick = (bug) => {
    const updateBugAction = bugActions.toggle(bug);
    dispatch(updateBugAction);
  }

  const onRemoveClick = (bug) => {
    const removeBugAction = bugActions.remove(bug);
    dispatch(removeBugAction);
  }

  const bugItems = bugs.map((bug, index) => {
    const bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '')

    return (
      <li key={index}>
        <div className={bugStyle} 
          onClick={() => onBugNameClick(bug)}>
            {bug.name}
        </div>
        <div className="datetime">
          {bug.createdAt}
        </div>
        <input type="button" value="Remove" onClick={() => onRemoveClick(bug)} />
      </li>
    )
  });

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
        <input type="text" value={newBugName} onChange={ evt => setNewBugName(evt.target.value)}  />
        <input type="button" value="Add New" onClick={onAddNewClick}/>
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
