import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Header from './components/Header';
import DebugRoutes from './components/DebugRoutes';
import Splash from './components/Splash';
import PollsDashboard from './components/PollsDashboard';
import Poll from './components/Poll';
import MakePoll from './components/MakePoll';
import Account from './components/Account';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Router>
      <div>
        {/* <Route path="/*" component={Header} /> */}
        <Route path="/*" component={DebugRoutes} />
        <Route exact path="/" component={Splash} />
        <Route exact path="/polls" component={PollsDashboard} />
        <Route exact path="/poll/1" component={Poll} />
        <Route exact path="/create/poll" component={MakePoll} />
        <Route exact path="/account" component={Account} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
