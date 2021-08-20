import React from "react";

import { addNewAnecdote } from "./../reducers/anecdoteReducer";

import { connect } from "react-redux";

const AnecdoteForm = props => {
  const add = async e => {
    e.preventDefault();

    props.addNewAnecdote(e.target.content.value);
    e.target.content.value = "";
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='content' />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  addNewAnecdote,
};
const connectedForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default connectedForm;
