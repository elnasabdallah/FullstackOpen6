import React from "react";
import { incrementVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";
const AnecdoteList = props => {
  let filtered;
  const anecdotes = props.anecdotes;
  const filter = props.filter;
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
    props.incrementVote(anecdote);
    props.setNotification(`you voted '${anecdote.content}'`, 10);
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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};
const mapDispatchToProps = {
  incrementVote,
  setNotification,
};
const connectAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default connectAnecdoteList;
