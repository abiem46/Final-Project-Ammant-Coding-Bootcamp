export const initialState = {
  items: {},
  pembelian: [],
  total: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        items: action.addCourse,
      };
    case "DEL_COURSE":
      return {
        ...state,
        items: {},
      };
    case "DEL_STATE":
      console.log("delstate");
      return {
        ...state,
        items: {},
      };
      case "CHECKOUT_SUCCESS":
      return {
        ...state,
        pembelian: [...state.pembelian, action.payment],
        items: {}
      };

    default:
      return state;
  }
};

export default Reducer;
