import React from "react";
import { useDispatch } from "react-redux";
import { addNewAnecdote } from "./../reducers/anecdoteReducer";
import anecdoteServices from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const add = async e => {
    e.preventDefault();

    dispatch(addNewAnecdote(e.target.content.value));
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

export default AnecdoteForm;
