import shippingAddressReducer from "../../reducers/shippingAddress";

test("should setup default shipping address values", () => {
  const state = shippingAddressReducer(undefined, {});

  expect(state).toEqual({
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
  });
});

test("should setup given shipping address values", () => {
  const state = shippingAddressReducer(undefined, {
    type: "SET_SHIPPING_ADDRESS",
    shippingAddressInfo: {
      firstName: "Nithin",
      lastName: "Madhuranga",
      company: "axis",
      address: "Kepuela",
      apartment: "543",
      city: "Ambalangoda",
      country: "lk",
      state: "sa",
      zip: "80300",
      phone: "94772321911",
      isComplete: true
    }
  });

  expect(state).toEqual({
    firstName: "Nithin",
    lastName: "Madhuranga",
    company: "axis",
    address: "Kepuela",
    apartment: "543",
    city: "Ambalangoda",
    country: "lk",
    state: "sa",
    zip: "80300",
    phone: "94772321911",
    isComplete: true
  });
});
