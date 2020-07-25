import * as ActionTypes from './ActionTypes';

// Week 5 - Task 1: Update the reducer code in redux/partners.js to respond to the three actions that were added to the action types.
export const Partners = (state = { isLoading: true,
                                    errMess: null,
                                    partners: [] }, action) => {
switch (action.type) {
  case ActionTypes.ADD_PARTNERS:
    return {...state, isLoading: false, errMess: null, partners: action.payload};

  case ActionTypes.PARTNERS_LOADING:
    return {...state, isLoading: true, errMess: null, partners: []}

  case ActionTypes.PARTNERS_FAILED:
    return {...state, isLoading: false, errMess: action.payload};
  default:
    return state;
  }
};