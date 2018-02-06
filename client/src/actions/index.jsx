import axios from 'axios';

/*
 * action types
 */

// failsafe for typo bugs in the future
// i.e. master store for types used
export const GET_BUSES = 'GET_BUSES';
export const GET_STOPS = 'GET_STOPS';
export const SET_BUS_SELECTION = 'SET_BUS_SELECTION';
export const SET_DIRECTION_SELECTION = 'SET_DIRECTION_SELECTION';
export const SET_STOP_SELECTION = 'SET_STOP_SELECTION';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export setDirectionSelection = (direction) => {
  return {
    type: SET_DIRECTION_SELECTION, direction
  };
}

export function setBusSelection(busSelection) {
  return {
    type: SET_BUS_SELECTION, busSelection
  };
}

export function setStopSelection(busStopId) {
  return {
    type: SET_STOP_SELECTION, busStopId
  };
}

export function getBuses() {
  const request = axios.get('/buses')

  return {
    type: GET_BUSES,
    payload: request
  };
}

export function getStops(direction, busSelection) {
  const request = axios.get('/stops', {
    params: {
      busSelection: busSelection,
      direction: direction
    }
  })

  return {
    type: GET_STOPS,
    payload: request
  };
}

//
