import billingAddressReducer from "../../reducers/billingAddress";

test("should setup default billing address values", () => {
  const state = billingAddressReducer(undefined, {});

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

test("should set given value to billing address", () => {
  const state = billingAddressReducer(undefined, {
    type: "SET_BILLING_ADDRESS",
    billingAddressInfo: {
      firstName: "Nithin",
      lastName: "Madhuranga",
      company: "axis",
      address: "Bogahawatta",
      apartment: "Kepuela",
      city: "Ambalangoda",
      country: "LK",
      state: "SU",
      zip: "80300",
      phone: "94772321911",
      isComplete: true
    }
  });

  expect(state).toEqual({
    firstName: "Nithin",
    lastName: "Madhuranga",
    company: "axis",
    address: "Bogahawatta",
    apartment: "Kepuela",
    city: "Ambalangoda",
    country: "LK",
    state: "SU",
    zip: "80300",
    phone: "94772321911",
    isComplete: true
  });
});
