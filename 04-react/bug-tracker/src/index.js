import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
window['axios'] = axios;

const BugTracker = () => {
  return (
    <div>
      <h3>Bugs</h3>
      <hr/>
      <section className="stats">
        <span className="closed">0</span>
        <span> / </span>
        <span>0</span>
      </section>
      <section className="edit">
        <label htmlFor="">Bug Name :</label>
        <input type="text" />
        <input type="button" value="Add New" id="btnAddNew" />
      </section>
      <section className="list">
        <ol id="bugList">
          <li>
            <div className="bugname">Bug - 1</div>
            <div className="datetime">[Created At]</div>
            <input type="button" value="Remove" />
          </li>
          <li>
            <div className="bugname closed">Bug - 2</div>
            <div className="datetime">[Created At]</div>
            <input type="button" value="Remove" />
          </li>
        </ol>
        <input type="button" value="Remove Closed" />
      </section>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Bug Tracker</h1>
    <hr/>
    <BugTracker></BugTracker>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
