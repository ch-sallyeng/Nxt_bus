import { GET_PREDICTIONS } from '../actions/index'

export default function(state = null, action) {
  switch (action.type) {
    case GET_PREDICTIONS:
      return action.payload.data
    default:
      return state;
  }
}
