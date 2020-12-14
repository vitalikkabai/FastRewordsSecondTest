import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../fire/fire';

const Graph = () => {
  const signOut = () => {
    fire.auth().signOut();
  };

  return (
    <div className="graphPage">
      <header>
        <Link to="/start">
          <button type="button" className="startedButton">
            GET STARTED
          </button>
        </Link>

        <Link to="/">
          <button type="button" className="logOutButton" onClick={signOut}>Log out</button>
        </Link>
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
