import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">Calories Tracker</span>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/new-meal" className="nav-link">Add new meal</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;