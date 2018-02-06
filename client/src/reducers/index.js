import { combineReducers } from 'redux';

import BusesReducer from './reducer_buses'
import StopsReducer from './reducer_stops'
import PredictionsInputsReducer from './reducer_prediction_inputs'
import PredictionsReducer from './reducer_predictions'

const rootReducer = combineReducers({
  buses: BusesReducer,
  stopsData: StopsReducer,
  predictionInputs: PredictionsInputsReducer,
  predictions: PredictionsReducer
});

export default rootReducer
