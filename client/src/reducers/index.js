import { combineReducers } from 'redux';

import BusesReducer from './reducer_buses'
import PredictionsInputsReducer from './reducer_prediction_inputs'

const rootReducer = combineReducers({
  buses: BusesReducer,
  predictionInputs: PredictionsInputsReducer
});

export default rootReducer
