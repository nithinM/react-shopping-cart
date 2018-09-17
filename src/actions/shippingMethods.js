// SET_SHIPPING_METHOD

const setSippingMethods = ({
  shippingMethod = "",
  shippingCost = "",
  isComplete = false
} = {}) => ({
  type: "SET_SHIPPING_METHOD",
  shippingMethod,
  shippingCost,
  isComplete
});

export default setSippingMethods;
