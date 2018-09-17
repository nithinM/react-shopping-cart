import setShippingAddress from "../../actions/shippingAddress";

test("should setup add item action object with given values", () => {
  const action = setShippingAddress({
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

  expect(action).toEqual({
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
});

test("should setup add item action object with defaut values", () => {
  const action = setShippingAddress({
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

  expect(action).toEqual({
    type: "SET_SHIPPING_ADDRESS",
    shippingAddressInfo: {
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
    }
  });
});
