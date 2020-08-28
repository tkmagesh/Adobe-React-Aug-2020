import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function spinnerReducer(currentState = 50, action){
  if (action.type === 'UP') return currentState + action.payload;
  if (action.type === 'DOWN') return currentState - action.payload;
  return currentState;
}

const Spinner = () => {
  const value = useSelector(storeState => storeState);
  const dispatch = useDispatch();
  const [delta, setDelta] = useState(0);
  const onDownClick = () => dispatch({ type: 'DOWN', payload : delta});
  const onUpClick = () => dispatch({ type: 'UP', payload: delta});
  return(
    <div>
      <h3>Spinner</h3>
      <hr />
      <label>Delta :</label>
      <input type="number" value={delta} onChange={ evt => setDelta(evt.target.valueAsNumber)} />
      <br/>
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
