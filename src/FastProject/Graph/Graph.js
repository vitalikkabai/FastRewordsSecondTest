import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

const Graph = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="graphPage">
      <header>
        <Link to="/start">
          <button type="button" className="startedButton">
            GET STARTED
          </button>
        </Link>

        <button type="button" className="logOutButton" onClick={signOut}>Log out</button>
      </header>
      <section className="graphSector">
        <h1>Logs info</h1>
        <h2>See below the time and logs info</h2>
        <div className="graph" />
      </section>
      <footer>
        Hi!
      </footer>
    </div>
  );
};

export default Graph;
