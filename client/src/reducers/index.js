import { combineReducers } from 'redux';
import busesReducer from '../reducers/reducer_buses'
import predictionsReducer from '../reducers/reducer_predictions'

const rootReducer = combineReducers({
  buses: busesReducer,
  predictions: predictionsReducer
});

export default rootReducer
