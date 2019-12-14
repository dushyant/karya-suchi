import { combineReducers } from 'redux';
// Reducers
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer
});

export default rootReducer;
