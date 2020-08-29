import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import BugTracker from './bugTracker'; 
import Projects from './projects';
import BugDetails from './bugTracker/BugDetails';

import appStore from './store';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Introduction</h3>
    <p>Id et quis enim elit. Officia non laborum amet incididunt Lorem pariatur nulla sint minim mollit id amet. Sint id qui id dolore enim do exercitation eu labore consectetur labore laborum pariatur esse. Minim esse cupidatat ipsum magna excepteur et et Lorem. Nulla id exercitation non fugiat ut do fugiat adipisicing.</p>
    <p>Quis id deserunt excepteur ipsum ullamco tempor. Id cillum ad eiusmod commodo ad dolor ad irure tempor ea. Velit consequat ex nisi eiusmod officia aliqua dolor ut incididunt minim culpa. Aliqua qui est proident ex ex do ullamco commodo. In consectetur aute ea nisi ut irure duis in quis sunt. Dolor dolor adipisicing non adipisicing. Aliquip enim quis magna ullamco officia laboris consectetur non ad do irure.</p>
    <p>Labore culpa aliqua mollit non mollit pariatur. Occaecat sint tempor amet minim excepteur occaecat ea officia aliquip eu aliqua qui consectetur ex. Laboris enim est voluptate sunt qui qui ipsum nostrud.</p>
  </div>
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <h1>Bug Tracker</h1>
        <hr/>
        <div>
          <span> [ <Link to="/">Home</Link> ] </span>
          <span> [ <Link to="/projects">Projects</Link> ] </span>
          <span> [ <Link to="/bugs">Bugs</Link> ] </span>
        </div>
        <Switch>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/bugs/:id">
            <BugDetails />
          </Route>
          <Route path="/bugs" match="exact">
            <BugTracker/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
