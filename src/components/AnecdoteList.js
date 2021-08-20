import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  let filtered;
  const anecdotes = useSelector(state => state.anecdotes);
  const filter = useSelector(state => state.filter);
  if (filter === "") {
    filtered = anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  } else {
    filtered = anecdotes.filter(
      anecdote =>
        anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
  anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  const vote = anecdote => {
    dispatch(incrementVote(anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 10));
  };

  return (
    <div>
      {filtered.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
