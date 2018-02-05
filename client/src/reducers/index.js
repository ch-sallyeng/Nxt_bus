import { combineReducers } from 'redux';
import BusesReducer from './reducer_buses'
import PredictionsReducer from './reducer_predictions'

const rootReducer = combineReducers({
  buses: BusesReducer,
  predictions: PredictionsReducer
});

export default rootReducer
