import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import Login from './Login/Login';
import Graph from './Graph/Graph';
import Start from './Start/Start';

let first = true;
let cancelSnapshot = null;

const FastProject = () => {
  const history = useHistory();
  const [loginsData, setLoginsData] = useState({
    'facebook.com': [],
    'google.com': [],
  });

  useEffect(
    () => firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        history.push('/graph');
        cancelSnapshot = firebase.firestore().collection('logins').onSnapshot((snapshot) => {
          const data = {
            'facebook.com': [],
            'google.com': [],
          };
          snapshot.forEach((doc) => {
            data[doc.id] = doc.data().logins;
          });

          setLoginsData(data);
        });
      } else {
        history.push('/');
        if (cancelSnapshot) {
          cancelSnapshot();
          cancelSnapshot = null;
        }
      }
      if (first) {
        first = false;
      } else if (authUser) {
        const { providerData } = authUser;
        const { providerId } = providerData[0];
        const ref = firebase.firestore().collection('logins').doc(providerId);
        ref.update({
          logins: firebase.firestore.FieldValue.arrayUnion(new Date().getTime()),
        });
      }
    }),
    [history],
  );

  return (
    <div className="fastProjectPage">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/graph"
          render={() => (
            <Graph loginsData={loginsData} />
          )}
        />
        <Route exact path="/start" component={Start} />
      </Switch>
    </div>
  );
};

export default FastProject;
