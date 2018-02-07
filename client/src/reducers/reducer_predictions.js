import { GET_PREDICTIONS } from '../actions/index'

export default function(state = null, action) {
  console.log('inside getPredictions reducer: ', action);
  switch (action.type) {
    case GET_PREDICTIONS:
      return action.payload.data
    default:
      return state;
  }
}

// predictions data not correctly fetched, checked server terminal for error message
// probs schema column casing
