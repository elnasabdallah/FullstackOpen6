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
export const setNotification = (msg, time) => {
  return async dispatch => {
    dispatch({
      type: "SET_FILTER",
      data: msg,
    });

    setTimeout(() => {
      dispatch({
        type: "RESET_FILTER",
      });
    }, time * 1000);
  };
};

export default notificationReducer;
