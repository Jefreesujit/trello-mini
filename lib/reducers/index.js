import * as actionEvents from '../actions/index';

export function appState (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

export function listReducer (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.CREATE_LIST) {
    newState.list.push({
      id: newState.counter + 1,
      name: action.payload
    });
    newState.counter += 1;
  } else if (actionType === actionEvents.DELETE_LIST) {
    newState.list = state.list.filter(list => list.id !== action.payload.id);
  }

  return newState;
}

export function tasksReducer (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.ADD_CARD) {
    newState.cards.push({
      id: newState.counter + 1,
      name: action.payload.item,
      category: action.payload.category,
      description: '',
      comments: []
    });
    newState.counter += 1;
  } else if (actionType === actionEvents.MOVE_CARD) {
    newState.cards = state.cards.map(card => {
      if (card.id == action.payload.id) {
        card.category = action.payload.category;
      }
      return card;
    });
  } else if (actionType === actionEvents.DELETE_LIST) {
    newState.cards = state.cards.filter(card => card.category !== action.payload.id);
  } else if (actionType === actionEvents.ADD_COMMENTS) {
    newState.cards[newState.cards.findIndex(item => item.id === action.payload.id)].comments.push(action.payload.comment)
  } else if (actionType === actionEvents.ADD_DESCRIPTION) {
    newState.cards[newState.cards.findIndex(item => item.id === action.payload.id)].description = action.payload.description;
  } else if (actionType === actionEvents.DELETE_CARD) {
    newState.cards.splice(newState.cards.findIndex(item => item.id === action.payload.id), 1)
  }

  return newState;
}

export function dataRequests (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SETTING_PAGEDATA) {
    newState.settings = true;
  } else if (actionType === actionEvents.SET_PAGEDATA) {
    newState.settings = false;
  }

  return newState;
}
