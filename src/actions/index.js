import {
  ADD_ITEM,
  CLEAR_LIST,
  DELETE_ITEM,
  UP_VOTE_ITEM,
  DOWN_VOTE_ITEM,
  SET_SORT,
  SET_PAGE,
  SET_ALERT
} from '../actions/types';

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload:{
    id:payload.id,
    name:payload.name,
    link:payload.link,
    point:0
  }
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id
});

export const upVoteItem = (id) => ({
  type: UP_VOTE_ITEM,
  id
});

export const downVoteItem = (id) => ({
  type: DOWN_VOTE_ITEM,
  id
});

export const clearList = () => ({
  type: CLEAR_LIST
});

export const setSort = (sort) => ({
  type: SET_SORT,
  sort
});

export const setPage = (page) => ({
  type: SET_PAGE,
  page
});

export const setAlert = (payload) => ({
  type: SET_ALERT,
  payload:{
    val:payload.val,
    name:payload.name,
    type:payload.type
  }
});