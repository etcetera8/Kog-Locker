import { combineReducers } from 'redux';
import { addUserData } from './addUserDataReducer';

const rootReducer = combineReducers(
  {
    userData: addUserData,
  }
);

export default rootReducer;