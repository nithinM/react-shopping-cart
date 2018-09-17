// customerInfo Reducer

const customerInfoReducerDefaultState = {
  email: "",
  keepMeUpdate: false,
  saveInfo: false,
  isComplete: false
};

const customerInfoReducer = (
  state = customerInfoReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_CUSTOMER_INFO":
      return { ...state, ...action.customerInfo };

    default:
      return state;
  }
};

export default customerInfoReducer;
