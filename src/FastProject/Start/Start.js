import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => (
  <div className="startPage">
    <header>
      <Link to="/graph">
        <button type="button" className="backButton">
          <div className="arrow" />
          <p>BACK</p>
        </button>
      </Link>
      <button type="button" className="logOutButton">Log out</button>
    </header>
    <div className="startPictures" />
  </div>
);
export default Start;
