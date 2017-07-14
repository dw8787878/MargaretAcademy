import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Campuses from './Campuses';
import Student from './Students';

import store from '../store';
import { getCampuses } from '../store';

class Main extends Component {

componentDidMount () {
  const campusesThunk = getCampuses ();
  store.dispatch(campusesThunk);
}

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path="/" component={ Campuses } />
          </Switch>
        </div>
      </Router>
    );
  }
}
         // <Route path="/" component={ Navbar } />
         // <Route path="/" component={ Campuses } />
         // <Route exact path="/students" component={ Students } />


export default Main;
