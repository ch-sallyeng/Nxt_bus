import { combineReducers } from 'redux';
import busesReducers from '../reducers/reducer_buses'

const rootReducer = combineReduceres({
  buses: busesReducers
});

export default rootReducer
