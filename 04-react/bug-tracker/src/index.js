import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import BugTracker from './bugTracker'; 
import Projects from './projects';

import appStore from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <h1>Bug Tracker</h1>
      <hr/>
      <Projects/>
      <BugTracker></BugTracker>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
