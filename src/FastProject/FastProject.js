import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './Login/Login';
import Graph from './Graph/Graph';
import Start from './Start/Start';
import store from './Redux/store';

const FastProject = () => (

  <div className="fastProjectPage">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/graph" component={Graph} />
          <Route exact path="/start" component={Start} />
        </Switch>
      </Router>
    </Provider>
  </div>
);

export default FastProject;
