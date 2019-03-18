import {GET_ADMIN} from "../actions/action-types";

const adminReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ADMIN:
      return action.value.data;
    default:
      return state;
  }
};

export {adminReducer}