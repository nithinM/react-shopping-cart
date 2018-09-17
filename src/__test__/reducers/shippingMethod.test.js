import shippingMethodReducer from "../../reducers/shippingMethod";

test("should setup default shipping methods values", () => {
  const state = shippingMethodReducer(undefined, {});

  expect(state).toEqual([]);
});

test("should setup given shipping methods values", () => {
  const state = shippingMethodReducer(undefined, {
    type: "SET_SHIPPING_METHOD",
    shippingMethod: "free",
    shippingCost: 0,
    isComplete: true
  });

  expect(state).toEqual({
    shippingMethod: "free",
    shippingCost: 0,
    isComplete: true
  });
});
