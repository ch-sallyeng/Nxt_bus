import { SET_NAME, SET_BUS_SELECTION, SET_DIRECTION_SELECTION, SET_STOP_SELECTION } from '../actions/index'

const DEFAULT_STATE = {
  name: null,
  busSelection: null,
  busStop: null,
  busStopId: null,
  direction: null,
}

export default function(state = DEFAULT_STATE, action) {
  // console.log(`TYPE: ${action.type} where action is: `)
  // console.log(action);

  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_BUS_SELECTION:
      return { ...state, busSelection: action.busSelection };
    case SET_DIRECTION_SELECTION:
      return { ...state, direction: action.direction };
    case SET_STOP_SELECTION:
      return { ...state, busStopId: action.busStopId, busStop: action.busStop};
    default:
      return state;
  }
}
