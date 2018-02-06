import { GET_BUSES } from '../actions/index'
import { makeDropdownOptions } from '../utils/semanticHelpers';

export default function(state = null, action) {

  switch(action.type) {
    case GET_BUSES:
      return makeDropdownOptions(action.payload.data.sort());
  }

  return state;
}
