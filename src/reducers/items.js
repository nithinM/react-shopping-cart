// Item Reducer

const itemReducerReducerDefaultState = [];

const itemReducer = (state = itemReducerReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.orderItem];

    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.itemId);

    default:
      return state;
  }
};

export default itemReducer;
