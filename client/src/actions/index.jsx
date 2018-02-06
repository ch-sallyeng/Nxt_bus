import axios from 'axios';

/*
 * action types
 */

// failsafe for typo bugs in the future
// i.e. master store for types used
export const GET_BUSES = 'GET_BUSES';
export const SET_BUS_SELECTION = 'SET_BUS_SELECTION';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/*
 * action creators
 */


export function getBuses() {
  const request = axios.get('/buses')

  return {
    type: GET_BUSES,
    payload: request
  };
}


export function setBusSelection(busSelection) {
  console.log('inside setBusSelection Action: ', busSelection)
  return {
    type: SET_BUS_SELECTION, busSelection
  };
}

//
