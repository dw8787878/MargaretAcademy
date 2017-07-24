import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store, { getCampuses } from '../store';
import { connect } from 'react-redux';


class CampusList extends Component {

  render() {

    return (
      <div>
        <div className={`container`}>
      Campuses:
        <ul>
          {Array.isArray(this.props.campuses) && this.props.campuses.map( (campus) => {
            return (
              <div key={campus.id}>
                <NavLink to={`/campus/${campus.id}`}>
                <li>
                { campus.name }
                </li>
                </NavLink>
              </div>
            )
          })}
        </ul>
        </div>
      </div>
    )
   }
}


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

const campusListContainer = connect( mapStateToProps, null )(CampusList);

export default campusListContainer;



