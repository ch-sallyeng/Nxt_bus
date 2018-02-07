import { GET_PAST_SEARCHES } from '../actions/index'

export default function(state = null, action) {
  switch (action.type) {
    case GET_PAST_SEARCHES:
      return action.payload.data
    default:
      return state;
  }
}
