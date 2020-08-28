import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 

const Spinner = () => {
  const value = useSelector(storeState => storeState.spinnerData);
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

const Calculator = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const result = useSelector(storeState => storeState.calculatorData);
  const dispatch = useDispatch();
  return(
    <div>
      <h3>Calculator</h3>
      <hr/>
        <input type="number" value={n1} onChange={evt => setN1(evt.target.valueAsNumber)}/>
        <input type="number" value={n2} onChange={evt => setN2(evt.target.valueAsNumber)}/>
        <br/>
        <input type="button" value="Add" onClick={ () => dispatch({ type : 'Add', payload : { n1 , n2}}) }/>
        <input type="button" value="Subtract" onClick={ () => dispatch({ type : 'Subtract', payload : { n1 , n2}}) }/>
        <input type="button" value="Multiply" onClick={ () => dispatch({ type : 'Multiply', payload : { n1 , n2}}) }/>
        <input type="button" value="Divide" onClick={ () => dispatch({ type : 'Divide', payload : { n1 , n2}}) }/>
        <div>{result}</div>
    </div>
  )
}
function spinnerReducer(currentState = 50, action) {
  if (action.type === 'UP') return currentState + action.payload;
  if (action.type === 'DOWN') return currentState - action.payload;
  return currentState;
}

function calculatorReducer(currentState = 0, action){
  const { n1 = 0, n2 = 0 } = action.payload || {} ;
  
  switch (action.type) {
    case "Add":
      return n1 + n2;
    case "Subtract":
      return n1 - n2;
    case "Multiply":
      return n1 * n2;
    case "Divide":
      return n1 / n2;
  
    default:
      return currentState;
  }
}

const rootReducer = combineReducers({
  spinnerData : spinnerReducer,
  calculatorData : calculatorReducer
});

const appStore = createStore(rootReducer);
window['store'] = appStore;
ReactDOM.render(
  <Provider store={appStore}>
    <Spinner></Spinner>
    <Calculator></Calculator>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
