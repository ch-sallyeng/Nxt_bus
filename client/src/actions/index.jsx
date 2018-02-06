import axios from 'axios';

// failsafe for typo bugs in the future
// i.e. master store for types used
export const GET_BUSES = 'GET_BUSES';
export const UPDATE_PREDICTIONS_INPUTS = 'UPDATE_PREDICTIONS_INPUTS';

export function getBuses() {
  const request = axios.get('/buses')

  return {
    type: GET_BUSES,
    payload: request
  };
}

export function updatePredictionInputs(input) {
  return {
    type: UPDATE_PREDICTIONS_INPUTS,
    payload: input
  }
}
