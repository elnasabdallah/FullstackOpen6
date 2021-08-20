import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";
const getAll = async () => {
  const results = await axios.get(baseUrl);
  return results.data;
};
const post = async anecdote => {
  const result = await axios.post(baseUrl, anecdote);
  return result.data;
};
const update = async anecdote => {
  const result = await axios.put(
    `http://localhost:3001/anecdotes/${anecdote.id}`,
    anecdote
  );
  return result.data;
};
export default { getAll, post, update };
