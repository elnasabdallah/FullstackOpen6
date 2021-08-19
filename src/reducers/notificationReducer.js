const initialState = null;
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.data;
    case "RESET_FILTER":
      return null;
    default:
      return state;
  }
};
export const setNotification = msg => {
  return {
    type: "SET_FILTER",
    data: msg,
  };
};
export const reSetNotification = () => {
  return {
    type: "RESET_FILTER",
  };
};
export default notificationReducer;
