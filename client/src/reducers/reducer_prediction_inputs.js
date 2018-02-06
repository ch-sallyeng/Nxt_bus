import { SET_BUS_SELECTION } from '../actions/index'

const DEFAULT_STATE = {
  busSelection: null,
  busStopId: null,
  busStop: null,
  direction: null,
}

export default function(state = DEFAULT_STATE, action) {
  console.log('PredictionsReducer: Action received: ', action)

  switch (action.type) {
    case SET_BUS_SELECTION:
      return { ...state, busSelection: action.busSelection };
    default:
      return state;
  }
}
