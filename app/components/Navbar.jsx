import React, { Component } from 'react';
import Campuses from './Campuses';
import { Link, NavLink, withRouter } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
   super(props);

   this.renderHome = this.renderHome.bind(this);
   this.renderStudents = this.renderStudents.bind(this);
  }

  renderHome() {
    return (
      <div>
      </div>
    );
  }

  renderStudents() {
    return (
      <div>
      </div>
    );
  }

  render () {
    return (
     <div>
        <h3>Welcome to Margaret Hamilton Interplanetary Academy of Javascript</h3>
        <button onPress={renderHome}>Home</button><button onPress={renderStudents}>Students</button>
        <hr />
     </div>
    );
  }


}
