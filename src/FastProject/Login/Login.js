import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import fire from '../fire/fire';

const Login = (props) => {
  const history = useHistory();

  const [facebookTime, setFacebookTime] = useState(null);
  const [googleTime, setGoogleTime] = useState(null);
  const [logCounter, setLogCounter] = useState(null);

  const getGoogleAcc = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const { user } = result;
      if (user) {
        history.push('/graph');
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
  };

  const getFacebookAcc = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const { user } = result;
      if (user) {
        history.push('/graph');
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
  };

  return (
    <div className="loginPage">
      <div className="loginArea">
        <h1>Login</h1>
        <div className="buttonArea">
          <button type="button" onClick={getGoogleAcc}>GOOGLE</button>
          <button type="button" onClick={getFacebookAcc}>FACEBOOK</button>
        </div>
      </div>
    </div >
  );
};

export default Login;
