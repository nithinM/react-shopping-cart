// shippingMethod Reducer

const shippingMethodReducerDefaultState = [];

const shippingMethodReducer = (
  state = shippingMethodReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_SHIPPING_METHOD":
      return {
        shippingMethod: action.shippingMethod,
        shippingCost: action.shippingCost,
        isComplete: action.isComplete
      };
    default:
      return state;
  }
};

export default shippingMethodReducer;
