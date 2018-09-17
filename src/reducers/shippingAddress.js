// shoppingAddressReducer

const shippingAddressReducerDefualtState = {
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

const shippingAddressReducer = (
  state = shippingAddressReducerDefualtState,
  action
) => {
  switch (action.type) {
    case "SET_SHIPPING_ADDRESS":
      return { ...state, ...action.shippingAddressInfo };

    default:
      return state;
  }
};

export default shippingAddressReducer;
