import { initialState } from '../store';
import { GET_ALL_CAMPUSES } from '../store';
import { getAllCampuses } from '../store';

//REDUCER:
function campusReducer (state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_CAMPUSES:
        newState.campuses = action.campuses;
        break;

      default:
        return state;
  }
  return newState;
}


export default campusReducer;
