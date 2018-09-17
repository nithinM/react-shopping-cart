import setBillingAddress from "../../actions/billingAddress";

test("should setup add billing address action object with given values", () => {
  const action = setBillingAddress({
    firstName: "Nithin",
    lastName: "Madhuranga",
    company: "axis",
    address: "Bogahawatta",
    apartment: "123",
    city: "Ambalangoda",
    country: "Sri Lanka",
    state: "Southern",
    zip: "80300",
    phone: "0772321911",
    isComplete: true
  });

  expect(action).toEqual({
    type: "SET_BILLING_ADDRESS",
    billingAddressInfo: {
      firstName: "Nithin",
      lastName: "Madhuranga",
      company: "axis",
      address: "Bogahawatta",
      apartment: "123",
      city: "Ambalangoda",
      country: "Sri Lanka",
      state: "Southern",
      zip: "80300",
      phone: "0772321911",
      isComplete: true
    }
  });
});

test("should setup add billing address action object with default values", () => {
  const action = setBillingAddress({
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
    type: "SET_BILLING_ADDRESS",
    billingAddressInfo: {
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
