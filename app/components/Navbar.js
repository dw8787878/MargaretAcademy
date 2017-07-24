import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';

export default class Navbar extends Component {

  render () {
    return (
      <nav className={`navbar navbar-default`}
      role={`navigation`}
      >
      <div>
        <h2>Welcome to Margaret Academy</h2>
        <button type={`button`}>Home</button>
        <button type={`button`}>Students</button>
      </div>
      </nav>
    );
  }

}
