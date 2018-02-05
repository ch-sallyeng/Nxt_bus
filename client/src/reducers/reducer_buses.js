// state is COMPONENT level the reducer is responsible for, NOT app level

export default function(state = null, action) {

  switch(action.type) {
    case "WILL_MOUNT":
      return action.payload;
  }

  return state;
}
