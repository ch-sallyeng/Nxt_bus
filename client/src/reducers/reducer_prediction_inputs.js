import { SET_BUS_SELECTION, SET_DIRECTION_SELECTION } from '../actions/index'

const DEFAULT_STATE = {
  busSelection: null,
  busStopId: null,
  busStop: null,
  direction: null,
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_BUS_SELECTION:
      return { ...state, busSelection: action.busSelection };
    case SET_DIRECTION_SELECTION:
      return { ...state, direction: action.direction };
    default:
      return state;
  }
}
