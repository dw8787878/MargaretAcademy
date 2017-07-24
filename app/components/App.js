import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store, { getCampuses } from '../store';

import Navbar from './Navbar';
import Campuses from './Campuses';
import Campus from './Campus';
//import Student from './Students';


export default class App extends Component {

componentDidMount(){
  store.dispatch(getCampuses());
}

render() {
    return (
        <div>
          <Navbar />
          <div className={`container`}>
          <div className={`row`}>
          <div className={`col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2`}>
          <div className={`main main-raised`}>
          <Switch>
          <Route path="/" className={`container`} component={ Campuses } />
          <Route path="/campus/:campusId" component={ Campus } />
          </Switch>
        </div> {/* closes className = main main-raised */}
        </div> {/* closes col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 */}
        </div> {/* closes row */}
        </div> {/* closes className = container */}
        </div>
    );
  }
}
         // <Route path="/" component={ Campuses } />
         // <Route exact path="/students" component={ Students } />



