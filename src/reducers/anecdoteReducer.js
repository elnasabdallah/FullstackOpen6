import axios from "axios";
import anecdoteServices from "./../services/anecdotes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.data;
    case "VOTE":
      return state.map(obj => (obj.id === action.data.id ? action.data : obj));
    case "ADD":
      return [...state, action.data];
    default:
      return state;
  }
};
export const incrementVote = anecdote => {
  return async dispatch => {
    anecdote.votes = anecdote.votes + 1;
    const updated = await anecdoteServices.update(anecdote);
    dispatch({
      type: "VOTE",
      data: updated,
    });
  };
};
export const addNewAnecdote = value => {
  return async dispatch => {
    const newAnecdote = {
      content: value,
      votes: 0,
    };
    const result = await anecdoteServices.post(newAnecdote);
    dispatch({
      type: "ADD",
      data: result,
    });
  };
};
export const initializeAnecdotes = () => {
  return async dispatch => {
    const result = await anecdoteServices.getAll();
    dispatch({
      type: "INITIALIZE",
      data: result,
    });
  };
};
export default reducer;
