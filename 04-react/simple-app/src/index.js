import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SalaryCalculator from './salaryCalculator';

import * as serviceWorker from './serviceWorker';

// import * as calculator from './calculator'
// import { add } from './calculator';

//importing the default export
/* 
import calc from './calculator';
console.log(calc); 
*/

ReactDOM.render(
  <React.StrictMode>
    <SalaryCalculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
