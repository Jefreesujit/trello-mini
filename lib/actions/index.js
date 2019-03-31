/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
export const CREATE_LIST = 'CREATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_CARD = 'ADD_CARD';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const MOVE_CARD = 'MOVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export function fetchingPageData () {
  return {
    type: FETCHING_PAGEDATA
  };
}

export function fetchPageData () {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: SET_PAGEDATA,
      payload: "message"
    });
  };
}

export function createList (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: CREATE_LIST,
      payload: data
    });
  };
}

export function deleteList (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: DELETE_LIST,
      payload: data
    });
  };
}

export function addCard (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_CARD,
      payload: data
    });
  };
}

export function moveCard (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: MOVE_CARD,
      payload: data
    });
  };
}

export function deleteCard (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: DELETE_CARD,
      payload: data
    });
  };
}

export function addComments (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_COMMENTS,
      payload: data
    });
  };
}

export function addDescription (data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_DESCRIPTION,
      payload: data
    });
  };
}

