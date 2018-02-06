import { GET_STOPS } from '../actions/index'
import { makeDropdownOptions } from '../utils/semanticHelpers';

export default function(state = null, action) {
  switch (action.type) {
    case GET_STOPS:
      return action.payload.data
    default:
      return state;
  }
}
