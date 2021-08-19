const initialState = "";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.data;
    case "RESET_ALERT":
      return "";
    default:
      return state;
  }
};
export const setFilter = value => {
  return {
    type: "SET_ALERT",
    data: value,
  };
};
export default filterReducer;
