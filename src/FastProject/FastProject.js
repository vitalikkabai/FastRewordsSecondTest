import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import Login from './Login/Login';
import Graph from './Graph/Graph';
import Start from './Start/Start';

const FastProject = () => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
      setUser(authUser);
      if (authUser) {
        history.push('/graph');
      } else {
        history.push('/');
      }
    });
  }, [history]);

  return (
    <div className="fastProjectPage">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/graph" component={Graph} />
        <Route exact path="/start" component={Start} />
      </Switch>
    </div>
  );
};

export default FastProject;
