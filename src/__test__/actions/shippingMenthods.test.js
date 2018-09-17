import setSippingMethods from "../../actions/shippingMethods";

test("should setup add item action object with given values", () => {
  const action = setSippingMethods({
    shippingMethod: "free",
    shippingCost: 0,
    isComplete: true
  });

  expect(action).toEqual({
    type: "SET_SHIPPING_METHOD",
    shippingMethod: "free",
    shippingCost: 0,
    isComplete: true
  });
});

test("should setup add item action object with default values", () => {
  const action = setSippingMethods({
    shippingMethod: "",
    shippingCost: "",
    isComplete: false
  });

  expect(action).toEqual({
    type: "SET_SHIPPING_METHOD",
    shippingMethod: "",
    shippingCost: "",
    isComplete: false
  });
});
