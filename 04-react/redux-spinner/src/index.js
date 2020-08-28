import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Spinner from './Spinner';

/* action = { type : '<Action Name>' : payload : supporting data } */

function spinnerReducer(currentState = 100 /* initial state */, action){
  if (action.type === 'UP') return currentState + 1;
  if (action.type === 'DOWN') return currentState - 1;
  return currentState;
}

const appStore = createStore(spinnerReducer);

//ONLY for testing, SHOULD NOT BE DONE IN REAL APPLICATIONS
window['store']=appStore;

function renderApp(){
    ReactDOM.render(
      <React.StrictMode>
        <Spinner store={appStore}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
renderApp();
appStore.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
