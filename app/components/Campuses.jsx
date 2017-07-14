import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import store from '../store';

import campusReducer from '../reducers';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const CampusList = (props) => {
    return (
    <ul>
      {props.campus && props.campuses.map(campus => {
        return (
          <li key={campus.id}>
            <NavLink to={`campus/${campus.id}`} activeClassName="active">
              <span># {campus.name}</span>
              <span className="campus">{props.messages.filter(message => message.campusId === 1).length}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>

    );

  };


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

export default connect( mapStateToProps, null )(CampusList);

