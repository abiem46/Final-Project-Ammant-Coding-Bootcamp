export const initialState = {
  items: [],
  total: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        state,
        items: [state.items, action.addCourse],
      };
    case "DEL_COURSE":
      return {
        ...state,
        items: [],
      };
    case "DEL_STATE":
      console.log("delstate");
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default Reducer;
