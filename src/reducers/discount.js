// discountCode Reducer

const discountCodeReducerDefaultState = "";

const discountCodeReducer = (
  state = discountCodeReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discountCode;
    default:
      return state;
  }
};

export default discountCodeReducer;
