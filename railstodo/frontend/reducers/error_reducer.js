import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { bindActionCreators } from 'redux';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:

      return action.errors;

    case CLEAR_ERRORS:


      return action.errors;

    default:
      return state;
  }
};

export default errorsReducer;