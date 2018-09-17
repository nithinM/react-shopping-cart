// billingAddress Reducer

const billingAddressReducerDefaultState = {
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  country: "",
  state: "",
  zip: "",
  phone: "",
  isComplete: false
};

const billingAddressReducer = (
  state = billingAddressReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_BILLING_ADDRESS":
      return { ...state, ...action.billingAddressInfo };
    default:
      return state;
  }
};

export default billingAddressReducer;
